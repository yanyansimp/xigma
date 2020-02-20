using System;

namespace Application
{
    public static class StringLibrary
    {
        public static string TextToPreview(this string value)
        {
            return !string.IsNullOrEmpty(value) ? value.Split()[0] + " ... " : " ... ";
        }
    }
}
