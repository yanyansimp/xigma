using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Chapters;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace API.Controllers
{
    public class ChaptersController : BaseController
    {
        [AllowAnonymous]
        [HttpGet]
        public async Task<ActionResult<List<Chapter>>> List()
        {
            return await Mediator.Send(new List.Query());
        }
    }
}