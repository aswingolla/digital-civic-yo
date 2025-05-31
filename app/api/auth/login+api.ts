import { User } from '@/types/shared/auth';
import { mockUsers } from '@/utils/mockData';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    
    // Simulate authentication
    const user = mockUsers.find(u => u.email === email);
    
    if (!user) {
      return new Response(JSON.stringify({ error: 'Invalid credentials' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    return Response.json({ user });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}