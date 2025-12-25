// import { useEffect, useState } from 'react';
// export function NoDependencyEffect() {
//   const [count, setCount] = useState(0);

//   // 🎯 CASE 4: No dependency array - HAR RENDER par chalega
//   useEffect(() => {
//     console.log('🔄 HAR RENDER PAR: Effect chal raha hai');
//   }); // ❌ No array = har render par chalega

//   return (
//     <div style={{padding: '20px', border: '2px solid red'}}>
//       <h2>🔄 No Dependency useEffect</h2>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(c => c + 1)}>
//         🔄 Re-render Karo
//       </button>
//     </div>
//   );
// }
// export function CleanupEffect() {
//   const [time, setTime] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     console.log('⏰ Timer effect start hua');
    
//     let intervalId;
    
//     if (isRunning) {
//       intervalId = setInterval(() => {
//         setTime(prev => prev + 1);
//         console.log('⏱️ Time update:', time + 1);
//       }, 1000);
//     }

//     // 🎯 CLEANUP FUNCTION: Component unmount ya dependency change se pehle
//     return () => {
//       console.log('🧹 Cleanup function chal raha hai');
//       clearInterval(intervalId);
//     };
//   }, [isRunning]); // ✅ Dependency: isRunning

//   return (
//     <div style={{padding: '20px', border: '2px solid purple'}}>
//       <h2>🧹 Cleanup useEffect</h2>
//       <p>⏱️ Time: {time} seconds</p>
      
//       <button onClick={() => setIsRunning(!isRunning)}>
//         {isRunning ? '⏸️ Pause' : '▶️ Start'}
//       </button>
      
//       <button onClick={() => setTime(0)}>🔄 Reset</button>
//     </div>
//   );
// }

// export function ApiEffect() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     console.log('🌐 API call start hui');
    
//     const fetchUsers = async () => {
//       try {
//         setLoading(true);
//         setError(null);
        
//         // Real API call simulation
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
//         if (!response.ok) throw new Error('API call failed');
        
//         const data = await response.json();
//         setUsers(data);
//         console.log('✅ API data aa gaya:', data.length, 'users');
        
//       } catch (err) {
//         setError(err.message);
//         console.error('❌ API error:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []); // ✅ Empty array = sirf component load par

//   if (loading) return <div>🔄 Loading users...</div>;
//   if (error) return <div>❌ Error: {error}</div>;

//   return (
//     <div style={{padding: '20px', border: '2px solid orange'}}>
//       <h2>🌐 API useEffect</h2>
//       <p>📊 Total Users: {users.length}</p>
      
//       {users.map(user => (
//         <div key={user.id} style={{margin: '10px', padding: '10px', border: '1px solid #ddd'}}>
//           <strong>{user.name}</strong> - {user.email}
//         </div>
//       ))}
//     </div>
//   );

import { useState, useEffect } from 'react';

function PracticeUseEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  
  // 1. Component load par
  useEffect(() => {
    console.log('🚀 Practice Component Load Hua');
  }, []);
  
  // 2. Count change par
  useEffect(() => {
    console.log(`🔢 Count Change Hua: ${count}`);
  }, [count]);
  
  // 3. Name change par
  useEffect(() => {
    console.log(`👤 Name Change Hua: ${name}`);
  }, [name]);

  return (
    <div style={{padding: '20px'}}>
      <h2>🎯 useEffect Practice</h2>
      
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>
        Count Badhao
      </button>
      
      <br /><br />
      
      <input 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Naam likho..."
      />
      <p>Naam: {name}</p>
    </div>
  );
}

export default PracticeUseEffect;