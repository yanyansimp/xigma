using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.Persons
{
    public class List
    {
        public class Query : IRequest<List<Person>> { }

        public class Handler : IRequestHandler<Query, List<Person>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Person>> Handle(Query request,
                CancellationToken cancellationToken)
            {
                var persons = await _context.Persons.ToListAsync();

                return persons;
            }
        }
    }
}