using Pricing.Entities;
using System;
using System.Collections.Generic;

namespace Pricing_App
{
    class Program
    {
        private static List<Item> items = new List<Item>();
        private static List<Item> itemsLists = new List<Item>();
        private static double grdTot=0;
        static void Main(string[] args)
        {
            Console.WriteLine("1-Mouse  2-Keyboard  3-Moniter   4-CPU   5-Laptop    6-USB Cab.");

            AddItems();
            AddQty();

            AddNew();


            Console.ReadLine();

        }
        private static void CalculateTotalWithoutDiscount()
        {

        }
        private static void DisplayLists(string qty) {
            Console.WriteLine("Code   Item          Price   Qty     Total");
            Item im = new Item();
            double tot;
            foreach (Item i in items) {
                tot = i.IteamPrice * Convert.ToDouble(qty);
                Console.WriteLine("{0}      {1}         {2}    {3}      {4}", i.ItemCode, i.ItemName, i.IteamPrice, qty, tot);
                grdTot = grdTot + tot;
                im.ItemCode = i.ItemCode;
                im.ItemName = i.ItemName;
                im.IteamPrice = i.IteamPrice;
                im.qty = Convert.ToInt32(qty);
                im.GrandTotal = tot;

                itemsLists.Add(im);
                //Console.WriteLine("Grand Totral: {0}", tot);
            }
            
        }
        private static void AddNew()
        {
            Console.Write("Enter 1 Add New and other for Calculation: ");
            string res = Console.ReadLine();
            if (res == "1")
            {
                AddItems();
                AddQty();
                AddNew();
            }
            else {
                Discount();
            }
        }
        private static void AddQty()
        {
            Console.Write("Enter Qty.: ");
            string qty = Console.ReadLine();
            DisplayLists(qty);
            Console.Write("-----------------------------------");
            Console.WriteLine("Grand Total:{0}", grdTot);
        }
        private static void AddItems()
        {
            Console.Write("Enter Item Code: ");
            string i = Console.ReadLine();
            Item item = new Item();
            switch (i)
            {
                case "1":
                    //Console.WriteLine("1 Mouse");
                    item.ItemCode = 1;
                    item.ItemName = "Mouse";
                    item.IteamPrice = 135.90;                    
                    break;
                case "2":
                    //Console.WriteLine("2 Keyboard");
                    item.ItemCode = 2;
                    item.ItemName = "Keyboard";
                    item.IteamPrice = 750;
                    break;
                case "3":
                    //Console.WriteLine("3 Moniter");
                    item.ItemCode = 3;
                    item.ItemName = "Moniter";
                    item.IteamPrice = 5500;
                    break;
                case "4":
                    //Console.WriteLine("4 CPU");
                    item.ItemCode = 4;
                    item.ItemName = "CPU";
                    item.IteamPrice = 15500;
                    break;
                case "5":
                    //Console.WriteLine("5 Laptop");
                    item.ItemCode = 5;
                    item.ItemName = "Laptop";
                    item.IteamPrice = 50000;
                    break;
                case "6":
                    //Console.WriteLine("6 USB Cable");
                    item.ItemCode = 6;
                    item.ItemName = "USB Cab.";
                    item.IteamPrice = 50;
                    break;

            }

            items.Add(item);
        }
        private static void Discount() {
            Console.WriteLine("1. Discount for all  2. Discount only Item   3. Get 2 get 1 free");
            string c = Console.ReadLine();

            if (c == "1")
            {
                DiscountAll();
            }
            else if (c == "2")
            {
                DiscountOnItem();
            }
            else {
                DiscountBuyTwo();
            }
        }
        private static void DiscountAll() {
            Console.WriteLine("Enter Discount in Percentage: ");
            string dis = Console.ReadLine();
            Console.Write("Final Total:{0}", Math.Round(grdTot - grdTot * (Convert.ToDouble(dis) / 100)));
        }
        private static void DiscountOnItem() {
            Console.WriteLine("Enter Item Code: ");
            string i = Console.ReadLine();
            Console.WriteLine("Enter Discount in Percentage: ");
            string dis = Console.ReadLine();
            foreach (Item im in itemsLists) {
                if (i == im.ItemCode.ToString()) {
                    Console.Write("Final Total:{0}", Math.Round(im.GrandTotal - im.GrandTotal * (Convert.ToDouble(dis) / 100))+grdTot);
                }
            }
            
        }
        private static void DiscountBuyTwo()
        {
            Console.WriteLine("Enter Item Code: ");
            string i = Console.ReadLine();
            
            foreach (Item im in itemsLists)
            {
                if (i == im.ItemCode.ToString())
                {
                    Console.Write("Final Total:{0}", grdTot - Math.Round(im.GrandTotal - im.GrandTotal * (Convert.ToDouble(2) / 100)));
                }
            }

        }

    }
}
