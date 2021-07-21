using System;
using Application.Interfaces;

namespace Application.Common
{
    public class StringExtensions : IStringExtensions
    {
        public string GetNumber()
        {
            return "GB001-7800001";
        }
        public string GetLast(string source, int length)
        {
            if (length >= source.Length)
                return source;
            
            return source.Substring(source.Length - length);
        }

        public string ControlNumberBuilder(string chapterCode, string chapterNumber, string dateSurvived, string userSequence)
        {
            string returnValue = "";

            if(chapterCode != "" && chapterNumber != "" && dateSurvived != "" && dateSurvived != "")
            {
                returnValue = string.Format("{0}{1}-{2}{3}", chapterCode, chapterNumber, GetLast(dateSurvived, 2), userSequence);
            }
            
            return returnValue;			
        }

        public string UserSequenceBuilder(string controlNumber)
        {
            string returnValue = "";
            int pad = 5;
            
            try {
                if (controlNumber.Contains("-"))
                {
                    returnValue = (Int32.Parse(controlNumber.Split('-')[1].Substring(2)) + 1).ToString().PadLeft(pad, '0');
                }
                else if (String.IsNullOrEmpty(controlNumber)) 
                {
                    returnValue = "1".PadLeft(pad, '0');
                }
            } 
            catch (FormatException e)
            {
                Console.WriteLine(e.Message);
            }
            
            return returnValue;
        }

    }
}