import './PrintEventForm.css'
import BigTriangleDown from '../Icons/BigTriangleDown/BigTriangleDown'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { addEvent } from '../../redux/eventsToPrint/actionCreators'

function PrintEventForm() {

	const [printForm, setPrintForm] = useState({
		eventId: '',
		eventTitle: '',
		eventData: '',
		eventDistance: '5',
		eventLocation: '',
		officialFinishTime: '',
		eventPace: '',
		eventComments: ''
	})

	const dispacth = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault()

		if (printForm.eventId &&
			printForm.eventTitle &&
			printForm.eventData &&
			printForm.eventDistance &&
			printForm.eventLocation &&
			printForm.officialFinishTime &&
			printForm.eventPace &&
			printForm.eventComments) {

			const picture1 = URL.createObjectURL(files.picture1)
			const picture2 = URL.createObjectURL(files.picture2)
			const picture3 = URL.createObjectURL(files.picture3)
			const medalPicture = URL.createObjectURL(files.medalPicture)
			const bibPicture = URL.createObjectURL(files.bibPicture)
			const trackPicture = URL.createObjectURL(files.trackPicture)

			const event = {
				printForm: printForm,
				picture1: picture1,
				picture2: picture2,
				picture3: picture3,
				medalPicture: medalPicture,
				bibPicture: bibPicture,
				trackPicture: trackPicture
			}

			dispacth(addEvent(event))

			console.log(printForm)

			setPrintForm({
				eventId: '',
				eventTitle: '',
				eventData: '',
				eventDistance: '5',
				eventLocation: '',
				officialFinishTime: '',
				eventPace: '',
				eventComments: ''
			})

			setFiles({
				picture1: null,
				picture2: null,
				picture3: null,
				medalPicture: null,
				bibPicture: null,
				trackPicture: null
			})
		}
	}

	// file upload
	const [files, setFiles] = useState({
		picture1: null,
		picture2: null,
		picture3: null,
		medalPicture: null,
		bibPicture: null,
		trackPicture: null
	});

	const handleFileChange = (e, key) => {
		const file = e.target.files[0];
		setFiles(prevFiles => ({
			...prevFiles,
			[key]: file,
		}));
	};
	// file upload ended


	return (
		<div>
			<div className='print-event-form-wrapper'>
				<form onSubmit={handleSubmit} className='print-event-form'>
					<div className='print-event-form-columns'>
						<div className='print-event-form-column-1'>
							<label htmlFor='eventId'>Id:</label>
							<input required type='text' id='eventId' placeholder='Input event id...' value={printForm.eventId} onChange={(e) => setPrintForm({ ...printForm, eventId: e.target.value })} />

							<label htmlFor='eventTitle'>Title:</label>
							<input required type='text' id='eventTitle' placeholder='Input event title..' value={printForm.eventTitle} onChange={(e) => setPrintForm({ ...printForm, eventTitle: e.target.value })} />

							<label htmlFor='eventData'>Data:</label>
							<input required type='text' id='eventData' placeholder='Input event data...' value={printForm.eventData} onChange={(e) => setPrintForm({ ...printForm, eventData: e.target.value })} />

							<label htmlFor='eventDistance'>Distance:</label>
							<select id='eventDistance' value={printForm.eventDistance} onChange={(e) => setPrintForm({ ...printForm, eventDistance: e.target.value })}>
								<option value='5'>5km</option>
								<option value='10'>10km</option>
								<option value='21.1'>21.1km</option>
								<option value='42.2'>42.2km</option>
							</select>

							<label htmlFor='eventLocation'>Location:</label>
							<input required type='text' id='eventLocation' placeholder='Input location...' value={printForm.eventLocation} onChange={(e) => setPrintForm({ ...printForm, eventLocation: e.target.value })}></input>

							<label htmlFor='officialFinishTime'>Official event time:</label>
							<input required type='text' id='officialFinishTime' placeholder='Input official event time...' value={printForm.officialFinishTime} onChange={(e) => setPrintForm({ ...printForm, officialFinishTime: e.target.value })}></input>

							<label htmlFor='eventPace'>Pace:</label>
							<input required type='text' id='eventPace' placeholder='Input pace...' value={printForm.eventPace} onChange={(e) => setPrintForm({ ...printForm, eventPace: e.target.value })} />

						</div>


						<div className='print-event-form-column-2'>

							<label htmlFor='eventPicture1'>My picture 1:</label>
							<input type='file' id='eventPicture1' onChange={(e) => handleFileChange(e, 'picture1')} />
							{files.picture1 ? (
								<img src={URL.createObjectURL(files.picture1)} alt="preview" />
							) : (
								<img src='./images/no-image.jpg' alt="no image" />
							)}

							<label htmlFor='eventPicture2'>My picture 2:</label>
							<input type='file' id='eventPicture2' onChange={(e) => handleFileChange(e, 'picture2')} />
							{files.picture2 ? (
								<img src={URL.createObjectURL(files.picture2)} alt="preview" />
							) : (
								<img src='./images/no-image.jpg' alt="no image" />
							)}

							<label htmlFor='eventPicture3'>My picture 3:</label>
							<input type='file' id='eventPicture3' onChange={(e) => handleFileChange(e, 'picture3')} />
							{files.picture3 ? (
								<img src={URL.createObjectURL(files.picture3)} alt="preview" />
							) : (
								<img src='./images/no-image.jpg' alt="no image" />
							)}
						</div>

						<div className='print-event-form-column-3'>

							<label htmlFor='eventTrackPicture'>My track picture:</label>
							<input type='file' id='eventTrackPicture' onChange={(e) => handleFileChange(e, 'trackPicture')} />
							{files.trackPicture ? (
								<img src={URL.createObjectURL(files.trackPicture)} alt="preview" />
							) : (
								<img src='./images/no-image.jpg' alt="no image" />
							)}

							<label htmlFor='eventMedalPicture'>My medal picture:</label>
							<input type='file' id='eventMedalPicture' onChange={(e) => handleFileChange(e, 'medalPicture')} />
							{files.medalPicture ? (
								<img src={URL.createObjectURL(files.medalPicture)} alt="preview" />
							) : (
								<img src='./images/no-image.jpg' alt="no image" />
							)}

							<label htmlFor='eventBibPicture'>My bib picture:</label>
							<input type='file' id='eventBibPicture' onChange={(e) => handleFileChange(e, 'bibPicture')} />
							{files.bibPicture ? (
								<img src={URL.createObjectURL(files.bibPicture)} alt="preview" />
							) : (
								<img src='./images/no-image.jpg' alt="no image" />
							)}

						</div>
					</div>

					<label htmlFor='eventComments'>Comments:</label>
					<textarea required rows='4' cols='70' id='eventComments' placeholder='Input event comments...' value={printForm.eventComments} onChange={(e) => setPrintForm({ ...printForm, eventComments: e.target.value })}></textarea>

					<button className='submit-print-button' type='submit'>Create your event card</button>
				</form>
			</div >
			<BigTriangleDown />
		</div >
	)
}

export default PrintEventForm