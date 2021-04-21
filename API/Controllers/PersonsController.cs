using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Persons;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class PersonsController : BaseController
    {
        // [HttpGet]
        // public async Task<ActionResult<List<ActivityDto>>> List()
        // {
        //     return await Mediator.Send(new List.Query());
        // }

        // [HttpGet("{id}")]
        // public async Task<ActionResult<ActivityDto>> Details(Guid id)
        // {
        //     return await Mediator.Send(new Details.Query{Id = id});
        // }

        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create.Command command)
        {
            return await Mediator.Send(command);
        }
    }
}