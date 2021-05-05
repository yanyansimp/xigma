using System;

namespace Domain
{
    public class Person
    {
        public Guid Id { get; set; }
        public string ControlNumber { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public DateTime BirthDate { get; set; }
        public string Suffix { get; set; }
        public string Gender { get; set; }
        public string BloodType { get; set; }
        public string Chapter { get; set; }
        public string SchoolName { get; set; }
        public string Address { get; set; }
        public string ContactNumber { get; set; }
        public string ContactPerson { get; set; }
        public string ContactPersonNumber { get; set; }
        public string DateSurvived { get; set; }
        public string RegionalChansellor { get; set; }
        public string GrandChansellor { get; set; }
        public virtual Photo Photo { get; set; }

    }
}