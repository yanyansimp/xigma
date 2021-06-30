using System;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Errors;
using AutoMapper;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Persons
{
    public class Details
    {
        public class Query : IRequest<Person> 
        { 
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Person>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Person> Handle(Query request, CancellationToken cancellationToken)
            {
                var person = await _context.Persons.FindAsync(request.Id);

                if (person == null)
                    throw new RestException(HttpStatusCode.NotFound, new { person = "Not Found" });

                return person;
            }
        }
    }
}