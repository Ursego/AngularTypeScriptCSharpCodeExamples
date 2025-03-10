using System;

namespace Tyler.Ias.DataChangeSubscriptions.Admin.Domain
{
    public class DataChgSubDto
    {
        public int DataChgSubId { get; set; }
        public string DataChgSubName { get; set; }
        public string DataChgSubDesc { get; set; }
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string UserFullName { get; set; }
        public string Who { get; set; }
        public DateTime Wen { get; set; }
        public bool ActiveFlg { get; set; }
    }
}
