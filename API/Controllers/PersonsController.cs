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
        [HttpGet]
        public async Task<ActionResult<List<Person>>> List(string keyWord)
        {
            return await Mediator.Send(new List.Query(keyWord));
        }

        // [HttpGet("/{keyWord}/search")]
        // public async Task<ActionResult<List<Person>>> Search(string keyWord)
        // {
        //     return await Mediator.Send(new Search.Query{KeyWord = keyWord});
        // }


        [HttpGet("{id}")]
        public async Task<ActionResult<Person>> Details(Guid id)
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create.Command command)
        {
            return await Mediator.Send(command);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(Guid id, Edit.Command command)
        {
            command.Id = id;
            return await Mediator.Send(command);
        }
    }
}