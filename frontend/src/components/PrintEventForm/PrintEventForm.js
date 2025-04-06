import './PrintEventForm.css'
import BigTriangleDown from '../Icons/BigTriangleDown/BigTriangleDown'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { addEvent } from '../../redux/eventsToPrint/actionCreators'
import { IoCloudUploadOutline } from "react-icons/io5";


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

	const goToCard = () => {
		window.scrollTo({
			top: 1100,
			behavior: 'smooth',
		});
	};


	return (
		<div>
			<div className='print-event-form-wrapper'>
				<form onSubmit={handleSubmit} className='print-event-form'>
					<div className='print-event-title-wrap'>
						<label htmlFor='eventTitle'>Title</label>
						<input required type='text' id='eventTitle' placeholder='Boston marathon' value={printForm.eventTitle} onChange={(e) => setPrintForm({ ...printForm, eventTitle: e.target.value })} />
					</div>
					<div className='print-event-form-row-1'>
						<div className='print-event-id-event-distance'>
							<label htmlFor='eventId'>Event ID</label>
							<input required type='text' id='eventId' placeholder='1' value={printForm.eventId} onChange={(e) => setPrintForm({ ...printForm, eventId: e.target.value })} />
						</div>
						<div className='print-event-id-event-distance'>
							<label htmlFor='eventData'>Date</label>
							<input required type='text' id='eventData' placeholder='15/11/2023' value={printForm.eventData} onChange={(e) => setPrintForm({ ...printForm, eventData: e.target.value })} />
						</div>
						<div className='print-event-id-event-distance'>
							<label htmlFor='eventDistance'>Distance</label>
							<select id='eventDistance' value={printForm.eventDistance} onChange={(e) => setPrintForm({ ...printForm, eventDistance: e.target.value })}>
								<option value='5'>5km</option>
								<option value='10'>10km</option>
								<option value='21.1'>21.1km</option>
								<option value='42.2'>42.2km</option>
							</select>
						</div>
					</div>
					<div className='print-event-location-wrap'>
						<label htmlFor='eventLocation'>Location</label>
						<input required type='text' id='eventLocation' placeholder='Boston' value={printForm.eventLocation} onChange={(e) => setPrintForm({ ...printForm, eventLocation: e.target.value })}></input>
					</div>
					<div className='print-event-form-row-2'>
						<div className='print-event-time-pace'>
							<label htmlFor='officialFinishTime'>Finish time</label>
							<input required type='text' id='officialFinishTime' placeholder='3:21:01' value={printForm.officialFinishTime} onChange={(e) => setPrintForm({ ...printForm, officialFinishTime: e.target.value })}></input>
						</div>
						<div className='print-event-time-pace'>
							<label htmlFor='eventPace'>Pace</label>
							<input required type='text' id='eventPace' placeholder='4:19' value={printForm.eventPace} onChange={(e) => setPrintForm({ ...printForm, eventPace: e.target.value })} />
						</div>
					</div>
					<div className='print-event-upload-wrap'>
						<p className='print-event-upload-title'>Upload your photos</p>
						<div className='print-form-dropzone'>
							<IoCloudUploadOutline className='print-form-dropzone-icon' />
							<p className='print-form-dropzone-title'>Click or drag and drop your photos</p>
						</div>
					</div>

					{/* 
					<div className='print-event-pictures-wrapper'>
						<div className='print-event-pictures-column'>
							<div className='print-event-picture-wrap'>
								<p className='print-event-picture-title'>My picture 1</p>
								<label htmlFor='eventPicture1' className='print-event-picture-label'>Choose photo</label>
								<input type='file' id='eventPicture1' onChange={(e) => handleFileChange(e, 'picture1')} />
								{files.picture1 ? (
									<img src={URL.createObjectURL(files.picture1)} alt="preview" />
								) : (
									<img src='./images/no-image.jpg' alt="no image" />
								)}
							</div>

							<div className='print-event-picture-wrap'>
								<p className='print-event-picture-title'>My picture 2</p>
								<label htmlFor='eventPicture2' className='print-event-picture-label'>Choose photo</label>
								<input type='file' id='eventPicture2' onChange={(e) => handleFileChange(e, 'picture2')} />
								{files.picture2 ? (
									<img src={URL.createObjectURL(files.picture2)} alt="preview" />
								) : (
									<img src='./images/no-image.jpg' alt="no image" />
								)}
							</div>
						</div>

						<div className='print-event-pictures-column'>
							<div className='print-event-picture-wrap'>
								<p className='print-event-picture-title'>My picture 3</p>
								<label htmlFor='eventPicture3' className='print-event-picture-label'>Choose photo</label>
								<input type='file' id='eventPicture3' onChange={(e) => handleFileChange(e, 'picture3')} />
								{files.picture3 ? (
									<img src={URL.createObjectURL(files.picture3)} alt="preview" />
								) : (
									<img src='./images/no-image.jpg' alt="no image" />
								)}

							</div>


							<div className='print-event-picture-wrap'>
								<p className='print-event-picture-title'>My picture 4</p>
								<label htmlFor='eventTrackPicture' className='print-event-picture-label'>Choose photo</label>
								<input type='file' id='eventTrackPicture' onChange={(e) => handleFileChange(e, 'trackPicture')} />
								{files.trackPicture ? (
									<img src={URL.createObjectURL(files.trackPicture)} alt="preview" />
								) : (
									<img src='./images/no-image.jpg' alt="no image" />
								)}
							</div>
						</div>

						<div className='print-event-pictures-column'>
							<div className='print-event-picture-wrap'>
								<p className='print-event-picture-title'>My picture 5</p>
								<label htmlFor='eventMedalPicture' className='print-event-picture-label'>Choose photo</label>
								<input type='file' id='eventMedalPicture' onChange={(e) => handleFileChange(e, 'medalPicture')} />
								{files.medalPicture ? (
									<img src={URL.createObjectURL(files.medalPicture)} alt="preview" />
								) : (
									<img src='./images/no-image.jpg' alt="no image" />
								)}
							</div>

							<div className='print-event-picture-wrap'>
								<p className='print-event-picture-title'>My picture 6</p>
								<label htmlFor='eventBibPicture' className='print-event-picture-label'>Choose photo</label>
								<input type='file' id='eventBibPicture' onChange={(e) => handleFileChange(e, 'bibPicture')} />
								{files.bibPicture ? (
									<img src={URL.createObjectURL(files.bibPicture)} alt="preview" />
								) : (
									<img src='./images/no-image.jpg' alt="no image" />
								)}
							</div>

						</div>
					</div> */}

					<div className='print-event-comment-wrap'>
						<label htmlFor='eventComments'>Comment</label>
						<textarea required rows={1} id='eventComments' placeholder='It was awesome!' value={printForm.eventComments} onChange={(e) => setPrintForm({ ...printForm, eventComments: e.target.value })}></textarea>
					</div>

					<button className='submit-print-button' type='submit' onClick={goToCard} >Create event card</button>
				</form>
			</div >
			{/* <BigTriangleDown /> */}
		</div >
	)
}

export default PrintEventForm