using System;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Linq;
using Application.Errors;
using AutoMapper;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;


namespace Application.Persons
{
    public class Search
    {
        public class Query : IRequest<List<Person>>
        {
            // public Query(string keyWord)
            // {
            //     KeyWord = keyWord;
            // }
            
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
                var persons = await _context.Persons
                                .Where(x => 
                                       x.LastName == request.KeyWord
                                )
                                .OrderBy(x => x.ControlNumber)
                                .ToListAsync();
                
                if (persons == null)
                    throw new RestException(HttpStatusCode.NotFound, new { person = "Not Found" });

                return persons;
            }
        }
    }
    
}