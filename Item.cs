using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pricing.Entities
{
    public class Item
    {
        public int ItemCode { get; set; }
        public string ItemName { get; set; }
        public double IteamPrice { get; set; }
        public int qty { get; set; }
        public double GrandTotal { get; set; }
    }
}
