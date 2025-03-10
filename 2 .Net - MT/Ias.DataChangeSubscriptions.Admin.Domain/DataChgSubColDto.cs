using System;

namespace Tyler.Ias.DataChangeSubscriptions.Admin.Domain
{
    public class DataChgSubColDto
    {
        public int DataChgSubTblId { get; set; }
        public string ColName { get; set; }
        public string ApiPropertyName { get; set; }
        public Boolean MonitorChangeFlag { get; set; }
        public string Who { get; set; }
        public DateTime Wen { get; set; }
    }
}
