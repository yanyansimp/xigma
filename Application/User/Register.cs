using System;
using System.Linq;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Common;
using Application.Errors;
using Application.Interfaces;
using Application.Validators;
using Domain;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.User
{
    public class Register
    {
        public class Command : IRequest<User>
        {
            public string DisplayName { get; set; }
            public string Username { get; set; }
            public string Email { get; set; }
            public string Password { get; set; }
            public string LastName { get; set; }
            public string FirstName { get; set; }
            public string MiddleName { get; set; }
            public DateTime BirthDate { get; set; }
            public string Suffix { get; set; }
            public string Gender { get; set; }
            public string BloodType { get; set; }
            public string Chapter { get; set; }
            public string SchoolName { get; set; }
            public string Address { get; set; }
            public string ContactNumber { get; set; }
            public string ContactPerson { get; set; }
            public string ContactPersonNumber { get; set; }
            public string RegionalChancellor { get; set; }
            public string GrandChancellor { get; set; }
            public string DateSurvived { get; set; }

        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                // RuleFor(x => x.DisplayName).NotEmpty();
                // RuleFor(x => x.Username).NotEmpty();
                RuleFor(x => x.Email).NotEmpty().EmailAddress();
                RuleFor(x => x.Password).Password();
            }
        }

        public class Handler : IRequestHandler<Command, User>
        {
            private readonly IStringExtensions _stringUtils;
            private readonly IJwtGenerator _jwtGenerator;
            private readonly DataContext _context;
            private readonly UserManager<AppUser> _userManager;

            public Handler(DataContext context, UserManager<AppUser> userManager,
                IJwtGenerator jwtGenerator, IStringExtensions stringUtils)
            {
                _jwtGenerator = jwtGenerator;
                _userManager = userManager;
                _context = context;
                _stringUtils = stringUtils;
            }

            public async Task<User> Handle(Command request,
                CancellationToken cancellationToken)
            {
                string controlNumber = "";

                string username = string.Concat($"{request.FirstName}.{request.LastName}".Where(c => !Char.IsWhiteSpace(c))).ToLower();

                if (await _context.Users.Where(x => x.Email == request.Email).AnyAsync())
                    throw new RestException(HttpStatusCode.BadRequest, new { Email = "Email already exists" });

                if (await _context.Users.Where(x => x.UserName == username).AnyAsync())
                    throw new RestException(HttpStatusCode.BadRequest, new { Username = "Username already exists" });

                var chapter = await _context.Chapters.SingleOrDefaultAsync(x => x.Name == request.Chapter);

                var lastUser = await _context.Users.LastOrDefaultAsync();

                if (chapter != null && lastUser != null)
                {
                    controlNumber = _stringUtils.ControlNumberBuilder(chapter.Code, chapter.SequenceId, request.DateSurvived,
                         _stringUtils.UserSequenceBuilder(String.IsNullOrEmpty(lastUser.ControlNumber) ? "" : lastUser.ControlNumber));
                }

                var user = new AppUser
                {
                    ControlNumber = controlNumber,
                    DisplayName = $"{request.FirstName} {request.LastName}",
                    Email = request.Email,
                    UserName = username,
                    LastName = request.LastName,
                    FirstName = request.FirstName,
                    MiddleName = request.MiddleName,
                    BirthDate = request.BirthDate,
                    Suffix = request.Suffix,
                    Gender = request.Gender,
                    BloodType = request.BloodType,
                    Chapter = request.Chapter,
                    SchoolName = request.SchoolName,
                    Address = request.Address,
                    ContactNumber = request.ContactNumber,
                    ContactPerson = request.ContactPerson,
                    ContactPersonNumber = request.ContactPersonNumber,
                    DateSurvived = request.DateSurvived,
                    CreatedAt = DateTime.Now,
                    LockoutEnd = DateTime.Now.AddYears(1)
                };

                // await _context.Chapters.Add()

                var result = await _userManager.CreateAsync(user, request.Password);

                chapter.AppUsers.Add(user);

                var success = await _context.SaveChangesAsync() > 0;

                if (result.Succeeded && success)
                {
                    return new User
                    {
                        DisplayName = user.DisplayName,
                        Token = _jwtGenerator.CreateToken(user),
                        Username = user.UserName,
                        // Image = user.Photos.FirstOrDefault(x => x.IsMain)?.Url
                    };
                }

                throw new Exception("Problem saving changes");
            }
        }
    }
}