using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.Persons
{
    public class Create
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public string ControlNumber { get; set; }
            public string LastName { get; set; }
            public string FirstName { get; set; }
            public string MiddleName { get; set; }
            public DateTime BirthDate { get; set; }
            public string Suffix { get; set; }
            public string Gender { get; set; }
            public string BloodType { get; set; }
            public string SchoolName { get; set; }
            public string Address { get; set; }
            public string ContactNumber { get; set; }
            public string ContactPerson { get; set; }
            public DateTime DateSurvived { get; set; }
            public string RegionalChansellor { get; set; }
            public string GrandChansellor { get; set; }
            
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.LastName).NotEmpty();
                RuleFor(x => x.FirstName).NotEmpty();
                RuleFor(x => x.MiddleName).NotEmpty();
                RuleFor(x => x.BirthDate).NotEmpty();
                RuleFor(x => x.Gender).NotEmpty();
                RuleFor(x => x.BloodType).NotEmpty();
                RuleFor(x => x.SchoolName).NotEmpty();
                RuleFor(x => x.Address).NotEmpty();
                RuleFor(x => x.ContactNumber).NotEmpty();
                RuleFor(x => x.ContactPerson).NotEmpty();
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
                var person = new Person
                {
                    Id = request.Id,
                    ControlNumber = request.ControlNumber,
                    LastName = request.LastName,
                    FirstName = request.FirstName,
                    MiddleName = request.MiddleName,
                    BirthDate = request.BirthDate,
                    Suffix = request.Suffix,
                    Gender = request.Gender,
                    BloodType = request.BloodType,
                    SchoolName = request.SchoolName,
                    Address = request.Address,
                    ContactNumber = request.ContactNumber,
                    ContactPerson = request.ContactPerson,
                    DateSurvived = request.DateSurvived,
                    RegionalChansellor = request.RegionalChansellor,
                    GrandChansellor = request.GrandChansellor
                };

                _context.Persons.Add(person);

                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
            
        }
    }
}