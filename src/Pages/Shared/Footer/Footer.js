import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="p-6 text-slate-800">
			<div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
				<div className="flex flex-col space-y-4">
					<h2 className="font-medium">Getting started</h2>
					<div className="flex flex-col space-y-2 text-sm text-slate-400">
						<Link rel="noopener noreferrer" href="#">Installation</Link>
						<Link rel="noopener noreferrer" href="#">Release Notes</Link>
						<Link rel="noopener noreferrer" href="#">Upgrade Guide</Link>
						<Link rel="noopener noreferrer" href="#">Using with Preprocessors</Link>

					</div>
				</div>
				<div className="flex flex-col space-y-4">
					<h2 className="font-medium">Core Concepts</h2>
					<div className="flex flex-col space-y-2 text-sm text-slate-400">
						<Link rel="noopener noreferrer" href="#">Utility-First</Link>
						<Link rel="noopener noreferrer" href="#">Responsive Design</Link>
						<Link rel="noopener noreferrer" href="#">Hover, Focus, &amp; Other States</Link>
						<Link rel="noopener noreferrer" href="#">Dark Mode</Link>

					</div>
				</div>
				<div className="flex flex-col space-y-4">
					<h2 className="font-medium">Customization</h2>
					<div className="flex flex-col space-y-2 text-sm text-slate-400">
						<Link rel="noopener noreferrer" href="#">Configuration</Link>
						<Link rel="noopener noreferrer" href="#">Theme Configuration</Link>
						<Link rel="noopener noreferrer" href="#">Breakpoints</Link>
						<Link rel="noopener noreferrer" href="#">Customizing Colors</Link>

					</div>
				</div>
				<div className="flex flex-col space-y-4">
					<h2 className="font-medium">Community</h2>
					<div className="flex flex-col space-y-2 text-sm text-slate-400">
						<Link rel="noopener noreferrer" href="#">GitHub</Link>
						<Link rel="noopener noreferrer" href="#">Discord</Link>
						<Link rel="noopener noreferrer" href="#">Twitter</Link>
						<Link rel="noopener noreferrer" href="#">YouTube</Link>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-center px-6 pt-12 text-sm">
				<span className="text-slate-400">© Copyright 2022. All Rights Reserved.</span>
			</div>
		</footer>
	);
};

export default Footer;