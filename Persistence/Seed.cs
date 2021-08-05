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
                        Location = "CMU, Musuan, Bukidnon",
                        CreatedAt = DateTime.Now,
                    },
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0002",
                        Name = "Alpha Beta Chapter",
                        Code = "AB",
                        Location = "SIC, BSU, Malaybalay, Bukidnon",
                        CreatedAt = DateTime.Now,
                    },
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0003",
                        Name = "Alpha Gamma Chapter",
                        Code = "AG",
                        Location = "ATI, Sait Valencia, Bukidnon",
                        CreatedAt = DateTime.Now,
                    },
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0004",
                        Name = "Alpha Delta Chapter",
                        Code = "AD",
                        Location = "Don Carlos, Bukidnon",
                        CreatedAt = DateTime.Now,
                    },
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0005",
                        Name = "Alpha Epsilon Chapter",
                        Code = "AE",
                        Location = "BSU Extension, Kalilangan, Bukidnon",
                        CreatedAt = DateTime.Now,
                    },
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0006",
                        Name = "Beta Chapter",
                        Code = "BC",
                        Location = "USM, Kabacan, North Cotabato",
                        CreatedAt = DateTime.Now,
                    },
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0007",
                        Name = "Beta Alpha Chapter",
                        Code = "BA",
                        Location = "NDMU, MPC, Marvel, South Cotabato",
                        CreatedAt = DateTime.Now,
                    },
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0008",
                        Name = "Beta Gamma Chapter",
                        Code = "BG",
                        Location = "Mlang College, Mlang, North Cotabato",
                        CreatedAt = DateTime.Now,
                    },
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0009",
                        Name = "Beta Delta Chapter",
                        Code = "BD",
                        Location = "Koronadal City",
                        CreatedAt = DateTime.Now,
                    },
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0010",
                        Name = "Beta Epsilon Chapter",
                        Code = "BE",
                        Location = "GSFIC, General Santos City",
                        CreatedAt = DateTime.Now,
                    },
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0011",
                        Name = "Beta Zeta Chapter",
                        Code = "BZ",
                        Location = "MPC, MC, General Santos City",
                        CreatedAt = DateTime.Now,
                    },
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0012",
                        Name = "Beta Eta Chapter",
                        Code = "BE",
                        Location = "Tacurong City",
                        CreatedAt = DateTime.Now,
                    },
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0013",
                        Name = "Beta Theta Chapter",
                        Code = "BT",
                        Location = "CDK, Kidapawan",
                        CreatedAt = DateTime.Now,
                    },
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0014",
                        Name = "Beta Lambda Chapter",
                        Code = "BL",
                        Location = "Glan Sarangani Province",
                        CreatedAt = DateTime.Now,
                    },
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0015",
                        Name = "Beta Kappa Chapter",
                        Code = "BK",
                        Location = "General Santos Academy, Polomolok",
                        CreatedAt = DateTime.Now,
                    },
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0016",
                        Name = "Gamma Chapter",
                        Code = "G",
                        Location = "Cagayan de Oro City",
                        CreatedAt = DateTime.Now,
                    },
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0017",
                        Name = "Gamma Alpha Chapter",
                        Code = "GA",
                        Location = "Balingasag, Misamis Oriental",
                        CreatedAt = DateTime.Now,
                    },
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0018",
                        Name = "Gamma Beta Chapter",
                        Code = "GB",
                        Location = "Gingoog City",
                        CreatedAt = DateTime.Now,
                    },
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0019",
                        Name = "Delta Chapter",
                        Code = "D",
                        Location = "MU, Ozamiz City",
                        CreatedAt = DateTime.Now,
                    },
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0020",
                        Name = "Delta Aplha Chapter",
                        Code = "DA",
                        Location = "Pana-on, Misamis Occidental",
                        CreatedAt = DateTime.Now,
                    },
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0021",
                        Name = "Epsilon Chapter",
                        Code = "E",
                        Location = "UM, Davao City",
                        CreatedAt = DateTime.Now,
                    },
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0022",
                        Name = "Zeta Chapter",
                        Code = "Z",
                        Location = "SJIT, Butuan City",
                        CreatedAt = DateTime.Now,
                    },
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0023",
                        Name = "Zeta Alpha Chapter",
                        Code = "ZA",
                        Location = "CSU, Ampayon, Butuan City",
                        CreatedAt = DateTime.Now,
                    },
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0024",
                        Name = "Zeta Beta Chapter",
                        Code = "ZB",
                        Location = "FSUU, Urios, Butuan City",
                        CreatedAt = DateTime.Now,
                    },
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0025",
                        Name = "Zeta Gamma Chapter",
                        Code = "ZG",
                        Location = "CSU, Cabadbaran City, Agusan del Norte",
                        CreatedAt = DateTime.Now,
                    },
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0026",
                        Name = "Eta Chapter",
                        Code = "E",
                        Location = "SMC, Mangagoy, Surigao del Sur",
                        CreatedAt = DateTime.Now,
                    },
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0027",
                        Name = "Eta Alpha Chapter",
                        Code = "EA",
                        Location = "SDSPSC, Tandag, Surigao del Sur",
                        CreatedAt = DateTime.Now,
                    },
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0028",
                        Name = "Eta Beta Chapter",
                        Code = "EB",
                        Location = "Lianga, Surigao del Sur",
                        CreatedAt = DateTime.Now,
                    },
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0029",
                        Name = "Theta Chapter",
                        Code = "T",
                        Location = "CPSP, Catarman, Camiguin",
                        CreatedAt = DateTime.Now,
                    },
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0030",
                        Name = "Theta Alpha Chapter",
                        Code = "TA",
                        Location = "Mambajao, Camiguin",
                        CreatedAt = DateTime.Now,
                    },
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0031",
                        Name = "Iota Chapter",
                        Code = "I",
                        Location = "MCC, San Francisco, Agusan del Sur",
                        CreatedAt = DateTime.Now,
                    },
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0032",
                        Name = "Iota Alpha Chapter",
                        Code = "IA",
                        Location = "ADSC, Bayugan City, Agusan del Sur",
                        CreatedAt = DateTime.Now,
                    },
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0033",
                        Name = "Kappa Chapter",
                        Code = "K",
                        Location = "WMSU, Tampilisan, Zamboanga del Sur",
                        CreatedAt = DateTime.Now,
                    },
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0034",
                        Name = "Kappa Alpha Chapter",
                        Code = "KA",
                        Location = "Dipolog City, Zamboanga del Sur",
                        CreatedAt = DateTime.Now,
                    },
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0035",
                        Name = "Lambda Chapter",
                        Code = "L",
                        Location = "SSCT, Surigao City, Surigao del Norte",
                        CreatedAt = DateTime.Now,
                    },
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0036",
                        Name = "Lambda Alpha Chapter",
                        Code = "LA",
                        Location = "DJEMCST, Dinagat Island/OMICRON",
                        CreatedAt = DateTime.Now,
                    },
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0037",
                        Name = "Omicron Chapter",
                        Code = "O",
                        Location = "Cebu City",
                        CreatedAt = DateTime.Now,
                    },
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0038",
                        Name = "Omicron Alpha Chapter",
                        Code = "OA",
                        Location = "Tagbilaran, Bohol",
                        CreatedAt = DateTime.Now,
                    },
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0039",
                        Name = "Omicron Beta Chapter",
                        Code = "OB",
                        Location = "ADFC, Tacloban City",
                        CreatedAt = DateTime.Now,
                    },
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0040",
                        Name = "Upsilon Chapter",
                        Code = "U",
                        Location = "Manila",
                        CreatedAt = DateTime.Now,
                    },
                    new Chapter
                    {
                        Id = Guid.NewGuid(),
                        SequenceId = "0041",
                        Name = "Upsilon Alpha Chapter",
                        Code = "UA",
                        Location = "Lasalle Dasmarinas, Cavite",
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
                        Date = DateTime.Now.AddDays(1),
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
                                DateJoined = DateTime.Now.AddDays(1)
                            },
                            new UserActivity
                            {
                                AppUserId = "b",
                                IsHost = false,
                                DateJoined = DateTime.Now.AddDays(1)
                            },
                        }
                    },
                };

                await context.Activities.AddRangeAsync(activities);
                await context.SaveChangesAsync();
            }
        }
    }
}