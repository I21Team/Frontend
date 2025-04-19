'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, LabelList, Tooltip } from 'recharts';
import { TrendingUp } from 'lucide-react';

// Composant
const TopProductsChart = () => {
  interface Product {
    name: string;
    value: number;
    fill: string;
  }

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoidGVzdHRAZXhhbXBsZS5jb20iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3NDUwMzI0OTEsImV4cCI6MTc0NTExODg5MX0.NrmyT65FNl-oYgDrwratnF74pq2UkSYQDF0YWhnBilw';
  const headers = {
    Authorization: `Bearer ${AUTH_TOKEN}`,
    'Content-Type': 'application/json',
  };

  useEffect(() => {
    const fetchTopProducts = async () => {
      try {
        const res = await fetch('http://localhost:3001/dashboard/top-products?limit=5', {
          headers,
        });

        if (!res.ok) {
          throw new Error(`Erreur: ${res.status}`);
        }

        const data = await res.json();

        const formatted = data.map((item: any, index: number) => ({
          name: item.name,
          value: item.value,
          fill: COLORS[index % COLORS.length],
        }));

        setProducts(formatted);
      } catch (err) {
        console.error('Erreur lors du chargement des produits :', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTopProducts();
  }, []);

  const COLORS = ['#4285F4', '#FF9800', '#FF5722', '#00BCD4', '#9E9E9E'];

  if (loading) {
    return (
      <Card className="h-64 flex items-center justify-center">
        <p>Chargement...</p>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="text-blue-500" />
          Top produits
        </CardTitle>
      </CardHeader>
      <CardContent>
        <PieChart width={400} height={250}>
          <Pie
            data={products}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          >
            {products.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
            <LabelList dataKey="name" position="outside" />
          </Pie>
          <Tooltip />
        </PieChart>
      </CardContent>
    </Card>
  );
};

export default TopProductsChart;
