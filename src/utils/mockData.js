// src/utils/mockData.js
export const generateMockData = (count = 100) => {
    const data = [];
    
    for (let i = 1; i <= count; i++) {
      data.push({
        id: i,
        name: `User ${i}`,
        email: `user${i}@example.com`,
        status: Math.random() > 0.5 ? 'Active' : 'Inactive',
        role: ['Admin', 'User', 'Manager', 'Developer'][Math.floor(Math.random() * 4)],
        joinDate: new Date(2020 + Math.floor(Math.random() * 5), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
        lastLogin: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
      });
    }
    
    return data;
  };
  
  export const mockData = generateMockData();
  