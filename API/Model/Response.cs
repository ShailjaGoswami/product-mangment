namespace CrudApi.Model
{
    public class Response
    {
        public bool isError { get; set; } = false;

        /// <summary>
        /// Store the Error Message
        /// </summary>
        public string errorMessage { get; set; }

        /// <summary>
        /// store the other Response Model
        /// </summary>
        public object response { get; set; }
    }
}
