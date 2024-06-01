import { Row, Col, Card, Statistic } from "antd";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const DashboardPage = () => {
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalProductSales, setTotalProductSales] = useState(0);
  const [totalCustomers, setTotalCustomers] = useState(0);

  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const MY_STRIPE_SECRET_KEY = import.meta.env.VITE_API_STRIPE_SECRET_KEY;

  const productSalesData = [
    { name: "Ocak", satilanUrunSayisi: 10 },
    { name: "Şubat", satilanUrunSayisi: 15 },
    { name: "Mart", satilanUrunSayisi: 20 },
    { name: "Nisan", satilanUrunSayisi: 25 },
    { name: "Mayıs", satilanUrunSayisi: 30 },
    { name: "Haziran", satilanUrunSayisi: 35 },
  ];

  const customerData = [
    { name: "Ocak", musteriSayisi: 20 },
    { name: "Şubat", musteriSayisi: 25 },
    { name: "Mart", musteriSayisi: 30 },
    { name: "Nisan", musteriSayisi: 34 },
    { name: "Mayıs", musteriSayisi: 40 },
    { name: "Haziran", musteriSayisi: 45 },
  ];


  useEffect(() => {
    const fetchTotalRevenue = async () => {
      try {
        const response = await fetch(
          "https://api.stripe.com/v1/payment_intents",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${MY_STRIPE_SECRET_KEY}`,
            },
          }
        );

        if (response.ok) {
          const { data } = await response.json();
          // Stripe API'dan gelen sipariş verilerini kullanarak toplam geliri hesaplama
          const totalRevenueFromOrders = data.reduce(
            (total, order) => total + order.amount,
            0
          );
         
          setTotalRevenue(totalRevenueFromOrders / 100); // Cent cinsinden olduğu varsayılarak 100'e bölünüyor
          setTotalProductSales(data.length);
        } else {
          message.error("Veri getirme başarısız.");
        }
      } catch (error) {
        console.log("Veri hatası:", error);
      }
    };

    fetchTotalRevenue();
  }, [MY_STRIPE_SECRET_KEY]);


  useEffect(() => {
    const fetchTotalCustomers = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/users/total`);
        if (response.ok) {
          const { totalCustomers } = await response.json();
          setTotalCustomers(totalCustomers);
        } else {
          console.error("Veri getirme başarısız.");
        }
      } catch (error) {
        console.log("Veri hatası:", error);
      }
    };

    fetchTotalCustomers();
  }, []);
  return (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <Statistic title="Toplam Sipariş Sayısı" value={totalProductSales} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Toplam Müşteri Sayısı" value={totalCustomers} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Toplam Gelir" value={totalRevenue} suffix="₺" />
          </Card>
        </Col>
      </Row>
      <Card style={{ marginTop: "20px" }}>
        <h2>Son Aydaki Ürün Satış Artışı</h2>
        <LineChart
          width={600}
          height={600}
          data={productSalesData}
          margin={{ top: 5, right: 30, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="satilanUrunSayisi"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </Card>
      <Card style={{ marginTop: "20px" }}>
        <h2>Son Aydaki Müşteri Artışı</h2>
        <LineChart
          width={600}
          height={300}
          data={customerData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="musteriSayisi"
            stroke="#82ca9d"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </Card>
    </div>
  );
};

export default DashboardPage;



