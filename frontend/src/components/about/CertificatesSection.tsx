export default function CertificatesSection() {
	const certificates = [
		{
			title: 'IELTS Certificate - Band 8.5',
			year: '2022',
		},
		{
			title: 'CELTA (Certificate in Teaching English)',
			year: '2019',
		},
		{
			title: 'TESOL Certification',
			year: '2018',
		},
		{
			title: 'Cambridge English Teaching Diploma',
			year: '2020',
		},
	]

	return (
		<section className='w-full py-16 flex justify-center'>
			<div className='w-full max-w-4xl bg-white rounded-2xl p-8 shadow-lg'>
				<h2 className='text-center text-xl font-semibold mb-8'>
					Certificates & Qualifications
				</h2>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					{certificates.map((cert, index) => (
						<div
							key={index}
							className='flex items-center gap-4 p-5 rounded-xl border bg-gray-50 hover:shadow transition'
						>
							<div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-xl'>
								🔑
							</div>
							<div>
								<p className='font-medium'>{cert.title}</p>
								<p className='text-gray-500 text-sm'>{cert.year}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
