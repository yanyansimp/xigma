using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Errors;
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
        public class Query : IRequest<List<Person>> 
        { 
            public Query(string keyWord)
            {
                KeyWord = keyWord;
            }

            public string KeyWord { get; set; }
            
        }

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
                // var persons = await _context.Persons.ToListAsync();
                var queryable = _context.Persons
                    .OrderBy(x => x.ControlNumber)
                    .AsQueryable();

                if (request.KeyWord != null)
                {
                    queryable = queryable
                        .Where(x => 
                            x.ControlNumber.ToLower() == request.KeyWord.ToLower() ||
                            x.LastName.ToLower() == request.KeyWord.ToLower() ||
                            x.FirstName.ToLower() == request.KeyWord.ToLower() ||
                            x.MiddleName.ToLower() == request.KeyWord.ToLower() ||
                            x.Suffix.ToLower() == request.KeyWord.ToLower() ||
                            x.Chapter.ToLower() == request.KeyWord.ToLower() ||
                            x.BloodType.ToLower() == request.KeyWord.ToLower() ||
                            x.SchoolName.ToLower() == request.KeyWord.ToLower()
                        );
                }

                var persons = await queryable.ToListAsync();

                if (persons == null)
                    throw new RestException(HttpStatusCode.NotFound, new { person = "Not Found" });

                return persons;
            }
        }
    }
}