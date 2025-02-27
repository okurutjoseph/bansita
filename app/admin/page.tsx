import { requireAdmin } from "@/utils/auth";

export default async function AdminDashboard() {
  // This will redirect if the user is not an admin
  const user = await requireAdmin();

  return (
    <main className="min-h-screen bg-white pt-32 pb-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl font-bold">ADMIN DASHBOARD</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Orders Overview */}
          <div className="border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Orders Overview</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Pending Orders</p>
                <p className="text-2xl font-bold">0</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Completed Orders</p>
                <p className="text-2xl font-bold">0</p>
              </div>
            </div>
          </div>

          {/* Products Overview */}
          <div className="border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Products Overview</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Total Products</p>
                <p className="text-2xl font-bold">0</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Out of Stock</p>
                <p className="text-2xl font-bold">0</p>
              </div>
            </div>
          </div>

          {/* Customer Overview */}
          <div className="border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Customer Overview</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Total Customers</p>
                <p className="text-2xl font-bold">0</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Active Today</p>
                <p className="text-2xl font-bold">0</p>
              </div>
            </div>
          </div>

          {/* Revenue Overview */}
          <div className="border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Revenue Overview</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Today's Revenue</p>
                <p className="text-2xl font-bold">$0</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">This Month</p>
                <p className="text-2xl font-bold">$0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 