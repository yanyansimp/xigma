using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Errors;
using Application.Interfaces;
using AutoMapper;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.Chapters
{
    public class List
    {
        public class Query : IRequest<List<Chapter>>
        {

        }

        public class Handler : IRequestHandler<Query, List<Chapter>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Chapter>> Handle(Query request,
                CancellationToken cancellationToken)
            {
                var chapters = await _context.Chapters.ToListAsync();

                if (chapters == null)
                    throw new RestException(HttpStatusCode.NotFound, new { chapter = "Not Found" });

                return chapters;
            }
        }
    }
}