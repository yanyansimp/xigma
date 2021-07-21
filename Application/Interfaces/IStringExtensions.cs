namespace Application.Interfaces
{
    public interface IStringExtensions 
    {
        string GetNumber();
        string GetLast(string source, int length);
        string ControlNumberBuilder(string chapterCode, string chapterNumber, string dateSurvived, string userSequence);
        string UserSequenceBuilder(string controlNumber);
    }
}