using System;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Errors;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.Persons
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public string ControlNumber { get; set; }
            public string LastName { get; set; }
            public string FirstName { get; set; }
            public string MiddleName { get; set; }
            public DateTime? BirthDate { get; set; }
            public string Suffix { get; set; }
            public string Gender { get; set; }
            public string BloodType { get; set; }
            public string Chapter { get; set; }
            public string SchoolName { get; set; }
            public string Address { get; set; }
            public string ContactNumber { get; set; }
            public string ContactPerson { get; set; }
            public string ContactPersonNumber { get; set; }
            public string DateSurvived { get; set; }
            public string RegionalChansellor { get; set; }
            public string GrandChansellor { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.ControlNumber).NotEmpty();
                RuleFor(x => x.LastName).NotEmpty();
                RuleFor(x => x.FirstName).NotEmpty();
                RuleFor(x => x.MiddleName).NotEmpty();
                RuleFor(x => x.BirthDate).NotEmpty();
                RuleFor(x => x.Gender).NotEmpty();
                RuleFor(x => x.BloodType).NotEmpty();
                RuleFor(x => x.Chapter).NotEmpty();
                RuleFor(x => x.SchoolName).NotEmpty();
                RuleFor(x => x.ContactNumber).NotEmpty();
                RuleFor(x => x.DateSurvived).NotEmpty();
                RuleFor(x => x.RegionalChansellor).NotEmpty();
                RuleFor(x => x.GrandChansellor).NotEmpty();
            }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request,
                CancellationToken cancellationToken)
            {
                //handler logic
                var person = await _context.Persons.FindAsync(request.Id);

                if (person == null)
                    throw new RestException(HttpStatusCode.NotFound, new {person = "Not Found"});

                person.LastName = request.LastName ?? person.LastName;
                person.FirstName = request.FirstName ?? person.FirstName;
                person.MiddleName = request.MiddleName ?? person.MiddleName;
                person.BirthDate = request.BirthDate ?? person.BirthDate;

                // Address this problem
                // person.Suffix = request.Suffix ?? person.Suffix;
                person.Suffix = request.Suffix;

                person.Gender = request.Gender ?? person.Gender;
                person.BloodType = request.BloodType ?? person.BloodType;
                person.Chapter = request.Chapter ?? person.Chapter;
                person.SchoolName = request.SchoolName ?? person.SchoolName;
                person.Address = request.Address ?? person.Address;
                person.ContactNumber = request.ContactNumber ?? person.ContactNumber;
                person.ContactPerson = request.ContactPerson ?? person.ContactPerson;
                person.ContactPersonNumber = request.ContactPersonNumber ?? person.ContactPersonNumber;
                person.DateSurvived = request.DateSurvived ?? person.DateSurvived;
                person.RegionalChansellor = request.RegionalChansellor ?? person.RegionalChansellor;
                person.GrandChansellor = request.GrandChansellor ?? person.GrandChansellor;

                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}