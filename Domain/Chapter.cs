using System;
using System.Collections.Generic;

namespace Domain
{
    public class Chapter
    {
        public Guid Id { get; set; }
        public string SequenceId { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public string Location { get; set; }
        public string GrandChancellor { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public DateTime? DeletedAt { get; set; }
        public virtual ICollection<AppUser> AppUsers { get; set; }
    }
}