var perk_threads = [
	[
		{
			name: 'Execution Speed 1',
			description: '2× execution speed',
			price: 1000,
			apply: function(cg) {
				cg.execution_speed(cg.execution_speed()*2);
			},
			sell: function(cg) {
				cg.execution_speed(cg.execution_speed()/2);
			}
		},
		{
			name: 'Execution Speed 2',
			description: '3× execution speed',
			price: 5000,
			apply: function(cg) {
				cg.execution_speed(3*cg.execution_speed());
			},
			sell: function(cg) {
				cg.execution_speed(cg.execution_speed()/3);
			}
		},
		{
			name: 'Execution Speed 3',
			description: '4× execution speed',
			price: 10000,
			repeats: true,
			price_factor: 2,
			apply: function(cg) {
				cg.execution_speed(4*cg.execution_speed());
			},
			sell: function(cg) {
				cg.execution_speed(cg.execution_speed()/4);
			}
		},
	],
	[
		{
			name: 'Maximum Steps 1',
			description: '2× maximum steps',
			price: 1000,
			apply: function(cg) {
				cg.max_steps(cg.max_steps()*2);
			},
			sell: function(cg) {
				cg.max_steps(cg.max_steps()/2);
			}
		},
		{
			name: 'Maximum Steps 2',
			description: '3× maximum steps',
			price: 5000,
			apply: function(cg) {
				cg.max_steps(3*cg.max_steps());
			},
			sell: function(cg) {
				cg.max_steps(cg.max_steps()/3);
			}
		},
		{
			name: 'Maximum Steps 3',
			description: '4× maximum steps',
			price: 10000,
			apply: function(cg) {
				cg.max_steps(4*cg.max_steps());
			},
			sell: function(cg) {
				cg.max_steps(cg.max_steps()/4);
			}
		},
	],
	[
		{
			name: 'One more line',
			description: '+1 maximum lines',
			price: 1000,
			repeats: true,
			price_factor: 1.5,
			apply: function(cg) {
				cg.max_lines(cg.max_lines()+1);
			},
			sell: function(cg) {
				cg.max_lines(cg.max_lines()-1);
			}
		}
	],
	[
		{
			name: 'Parallel computation!',
			description: 'Add another processor',
			price: 50000,
			repeats: true,
			price_factor: 3,
			apply: function(cg) {
				cg.add_processor();
			},
			sell: function(cg) {
				cg.processors.pop();
			}
		}
	]
]
