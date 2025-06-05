import React from 'react';

function AccountPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">My Account</h1>
      <div className="mt-6 bg-white rounded-lg shadow p-6 space-y-6">
        {/* Profile Details */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Profile Details</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Name:</span>
              <span>John Doe</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Email:</span>
              <span>john.doe@example.com ✓</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Phone:</span>
              <span>+91 9876543210 ✓</span>
            </div>
          </div>
        </div>

        {/* Account Settings */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
          <div className="space-y-3">
            <button className="w-full text-left py-2 px-4 bg-gray-50 rounded">
              Change Password
            </button>
            <button className="w-full text-left py-2 px-4 bg-gray-50 rounded">
              Notification Preferences
            </button>
            <button className="w-full text-left py-2 px-4 bg-gray-50 rounded">
              Language Settings
            </button>
          </div>
        </div>

        {/* Logout Button */}
        <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700">
          Log Out
        </button>
      </div>
    </div>
  );
}

export default AccountPage;