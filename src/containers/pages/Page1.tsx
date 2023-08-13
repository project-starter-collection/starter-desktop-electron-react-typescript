import React, { FC } from 'react';
import { useUserStore } from '../../stores/userStore';

const Page1: FC = () => {
  const username = useUserStore((state) => state.username);
  const setUsername = useUserStore((state) => state.setUsername);

  return (
    <div>
      <div>Page 1</div>
      <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
    </div>
  );
}

export default Page1;
