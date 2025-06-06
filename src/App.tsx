// import React from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { AuthProvider, useAuth } from './context/AuthContext';
// import { Toaster } from 'react-hot-toast';
// import Sidebar from './components/layout/Sidebar';
// import DueDatesPage from './pages/DueDatesPage';

// // Pages
// import LandingPage from './pages/LandingPage';
// import SignInPage from './pages/SignInPage';
// import SignUpPage from './pages/SignUpPage';
// import DashboardPage from './pages/DashboardPage';
// import MembersPage from './pages/MembersPage';
// import MembershipsPage from './pages/MembershipsPage';
// import AttendancePage from './pages/AttendancePage';
// import AdminDashboardPage from './pages/admin/AdminDashboardPage';

// // Protected Route Component
// const ProtectedRoute = ({ children, requireAdmin = false }: { children: React.ReactNode; requireAdmin?: boolean }) => {
//   const { isAuthenticated, isLoading, user } = useAuth();
  
//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
//       </div>
//     );
//   }
  
//   if (!isAuthenticated) {
//     return <Navigate to="/signin" replace />;
//   }

//   if (requireAdmin && user?.role !== 'admin') {
//     return <Navigate to="/dashboard\" replace />;
//   }
  
//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       <Sidebar />
//       <main className="flex-1 p-8">
//         {children}
//       </main>
//     </div>
//   );
// };

// function App() {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/signin" element={<SignInPage />} />
//           <Route path="/signup" element={<SignUpPage />} />
          
//           {/* Admin Routes */}
//           <Route
//             path="/admin"
//             element={
//               <ProtectedRoute requireAdmin>
//                 <AdminDashboardPage />
//               </ProtectedRoute>
//             }
//           />

//           {/* Redirect /gym-owners to /admin */}
//           <Route
//             path="/gym-owners"
//             element={<Navigate to="/admin\" replace />}
//           />
          
//           {/* Protected Routes */}
//           <Route
//             path="/dashboard"
//             element={
//               <ProtectedRoute>
//                 <DashboardPage />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/members"
//             element={
//               <ProtectedRoute>
//                 <MembersPage />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/memberships"
//             element={
//               <ProtectedRoute>
//                 <MembershipsPage />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/attendance"
//             element={
//               <ProtectedRoute>
//                 <AttendancePage />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/due-dates"
//             element={
//               <ProtectedRoute>
//                 <DueDatesPage />
//               </ProtectedRoute>
//             }
//           />
          
//           {/* Fallback route */}
//           <Route path="*" element={<Navigate to="/\" replace />} />
//         </Routes>
//       </BrowserRouter>
      
//       <Toaster
//         position="top-right"
//         toastOptions={{
//           style: {
//             background: '#fff',
//             color: '#333',
//           },
//           duration: 3000,
//         }}
//       />
//     </AuthProvider>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { AuthProvider, useAuth } from './context/AuthContext';
// import { Toaster } from 'react-hot-toast';
// import Sidebar from './components/layout/Sidebar';
// import DueDatesPage from './pages/DueDatesPage';

// // Pages
// import LandingPage from './pages/LandingPage';
// import SignInPage from './pages/SignInPage';
// import SignUpPage from './pages/SignUpPage';
// import DashboardPage from './pages/DashboardPage';
// import MembersPage from './pages/MembersPage';
// import MembershipsPage from './pages/MembershipsPage';
// import AttendancePage from './pages/AttendancePage';
// import AdminDashboardPage from './pages/admin/AdminDashboardPage';

// // Protected Route Component
// const ProtectedRoute = ({
//   children,
//   requireAdmin = false,
// }: {
//   children: React.ReactNode;
//   requireAdmin?: boolean;
// }) => {
//   const { isAuthenticated, isLoading, user } = useAuth();

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
//       </div>
//     );
//   }

//   if (!isAuthenticated) {
//     return <Navigate to="/signin" replace />;
//   }

//   // Fixed escaping and logic here — navigate correctly without trailing slash or escaping
//   if (requireAdmin && user?.role !== 'admin') {
//     return <Navigate to="/dashboard" replace />;
//   }

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       <Sidebar />
//       <main className="flex-1 p-8">{children}</main>
//     </div>
//   );
// };

// function App() {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/signin" element={<SignInPage />} />
//           <Route path="/signup" element={<SignUpPage />} />

//           {/* Admin Routes */}
//           <Route
//             path="/admin"
//             element={
//               <ProtectedRoute requireAdmin>
//                 <AdminDashboardPage />
//               </ProtectedRoute>
//             }
//           />

//           {/* Redirect /gym-owners to /admin */}
//           {/* Fixed escaping here as well */}
//           <Route path="/gym-owners" element={<Navigate to="/admin" replace />} />

//           {/* Protected Routes */}
//           <Route
//             path="/dashboard"
//             element={
//               <ProtectedRoute>
//                 <DashboardPage />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/members"
//             element={
//               <ProtectedRoute>
//                 <MembersPage />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/memberships"
//             element={
//               <ProtectedRoute>
//                 <MembershipsPage />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/attendance"
//             element={
//               <ProtectedRoute>
//                 <AttendancePage />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/due-dates"
//             element={
//               <ProtectedRoute>
//                 <DueDatesPage />
//               </ProtectedRoute>
//             }
//           />

//           {/* Fallback route */}
//           {/* Fixed escaping here too */}
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//       </BrowserRouter>

//       <Toaster
//         position="top-right"
//         toastOptions={{
//           style: {
//             background: '#fff',
//             color: '#333',
//           },
//           duration: 3000,
//         }}
//       />
//     </AuthProvider>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Toaster } from 'react-hot-toast';
import Sidebar from './components/layout/Sidebar';
import DueDatesPage from './pages/DueDatesPage';

// Pages
import LandingPage from './pages/LandingPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import DashboardPage from './pages/DashboardPage';
import MembersPage from './pages/MembersPage';
import MembershipsPage from './pages/MembershipsPage';
import AttendancePage from './pages/AttendancePage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';

// Protected Route Component
const ProtectedRoute = ({ children, requireAdmin = false }: { children: React.ReactNode; requireAdmin?: boolean }) => {
  const { isAuthenticated, isLoading, user } = useAuth();
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  // If admin page and user is NOT admin, redirect to user dashboard
  if (requireAdmin && user?.role !== 'admin') {
    return <Navigate to="/dashboard" replace />;
  }
  
  // If user tries to access user pages but is admin, redirect to admin dashboard (optional)
  if (!requireAdmin && user?.role === 'admin') {
    return <Navigate to="/admin" replace />;
  }
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          
          {/* Admin Routes */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute requireAdmin>
                <AdminDashboardPage />
              </ProtectedRoute>
            }
          />

          {/* Redirect /gym-owners to /admin */}
          <Route
            path="/gym-owners"
            element={<Navigate to="/admin" replace />}
          />
          
          {/* Protected Routes for normal users */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/members"
            element={
              <ProtectedRoute>
                <MembersPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/memberships"
            element={
              <ProtectedRoute>
                <MembershipsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/attendance"
            element={
              <ProtectedRoute>
                <AttendancePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/due-dates"
            element={
              <ProtectedRoute>
                <DueDatesPage />
              </ProtectedRoute>
            }
          />
          
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
      
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#fff',
            color: '#333',
          },
          duration: 3000,
        }}
      />
    </AuthProvider>
  );
}

export default App;
