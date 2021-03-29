using System;

namespace Domain
{
    public class Person
    {
        public Guid Id { get; set; }
        public string ReferenceId { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string Suffix { get; set; }
        public string Gender { get; set; }
        public string BloodType { get; set; }
        public string SchoolName { get; set; }
        public string Address { get; set; }
        public string ContactNumber { get; set; }
        public string ContactPerson { get; set; }
        public int MyProperty { get; set; }

    }
}