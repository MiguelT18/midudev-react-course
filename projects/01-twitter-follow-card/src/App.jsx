import { useState } from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {
	const users = [
		{
			username: 'midudev',
			name: 'Miguel Ángel Durán',
			isFollowing: true,
		},
		{
			username: 'pheralb',
			name: 'Pablo Hernandez',
			isFollowing: false,
		},
		{
			username: 'PacoHdezs',
			name: 'Paco Hdez',
			isFollowing: true,
		},
		{
			username: 'TMChein',
			name: 'Tomas',
			isFollowing: false,
		},
	];

	return (
		<section className='App'>
			{users.map(({ username, name, isFollowing }, index) => {
				return (
					<TwitterFollowCard
						key={username}
						username={username}
						initialIsFollowing={isFollowing}>
						{name}
					</TwitterFollowCard>
				);
			})}
		</section>
	);
}
