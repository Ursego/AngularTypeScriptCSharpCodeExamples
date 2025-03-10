using System;

namespace Tyler.Ias.DataChangeSubscriptions.Admin.Domain
{
    public class DataChgSubTblDto
    {
        public int DataChgSubTblId { get; set; }
        public int DataChgSubId { get; set; }
        public string TblName { get; set; }
        public string ApiPropertyName { get; set; }
        public string Who { get; set; }
        public DateTime? Wen { get; set; }
        public int? ColsCount { get; set; }
    }
}