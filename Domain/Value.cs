using System;

namespace Domain
{
    public class Value
    {
        //A property within entities with ID -> Is automatically be set as the primary key. 
        public int Id { get; set; }
        public string Name { get; set; }
    }
}