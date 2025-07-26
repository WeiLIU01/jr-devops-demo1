using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]

public class HelloWorldController : ControllerBase
{
    [HttpGet]

    public IActionResult Get()
    {
        return Ok("Hello WorldJR student");
    }    
    
    [HttpGet("name")]

    public IActionResult GetName(string name)
    {
        return Ok($"Hello {name}!");
    }
}