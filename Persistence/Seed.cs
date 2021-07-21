using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context,
            UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var users = new List<AppUser>
                {
                    new AppUser
                    {
                        Id = "a",
                        DisplayName = "superadmin",
                        UserName = "super.admin",
                        Email = "superadmin@test.com"
                    },
                    new AppUser
                    {
                        Id = "b",
                        DisplayName = "admin",
                        UserName = "admin.admin",
                        Email = "admin@test.com"
                    },
                };

                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }
            }

            if (!context.Chapters.Any()) 
            {
                var chapters = new List<Chapter>
                {
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0001",
                        Name = "Alpha Chapter",
                        Code = "A",
                        Location = "CMU, Bukidnon",
                        CreatedAt = DateTime.Now,
                    },
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0014",
                        Name = "Zeta Chapter",
                        Code = "I",
                        Location = "SJIT, Butuan City",
                        CreatedAt = DateTime.Now,
                    },
                };

                await context.Chapters.AddRangeAsync(chapters);
                await context.SaveChangesAsync();
            }

            if (!context.Activities.Any())
            {
                var activities = new List<Activity>
                {
                    new Activity
                    {
                        Title = "Welcome to the System",
                        Date = DateTime.Now,
                        Description = "Initial Deployment - National Operations",
                        Category = "Culture",
                        City = "Butuan City",
                        Venue = "National Operations",
                        UserActivities = new List<UserActivity>
                        {
                            new UserActivity
                            {
                                AppUserId = "a",
                                IsHost = true,
                                DateJoined = DateTime.Now.AddMonths(8)
                            },
                            new UserActivity
                            {
                                AppUserId = "b",
                                IsHost = false,
                                DateJoined = DateTime.Now.AddMonths(8)
                            },
                        }
                    }
                };

                await context.Activities.AddRangeAsync(activities);
                await context.SaveChangesAsync();
            }
        }
    }
}