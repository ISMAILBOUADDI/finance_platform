import React from 'react';

const Layout = ({
	children,
  }: Readonly<{
	children: React.ReactNode;
  }>) => {
	return (
		<div
		className="min-h-screen
		grid grid-cols-1 lg:grid-cols-2">
<div
		className="h-full
		lg:flex items-center justify-center px-4 first-line:pt-16 lg:pt-4">
		{children}
</div>
</div>
	);
}

export default Layout;
