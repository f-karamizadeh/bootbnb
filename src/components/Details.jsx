import * as Unicons from '@iconscout/react-unicons';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = ({entries}) => {
    if (!entries || !entries.unterkuenfte || entries.unterkuenfte.length === 0) {
        console.log(entries);
        return <div>loading...</div>;
      }
    
      
    const { id } = useParams();
    const nameUnterkunft = entries.unterkuenfte[id].name;
    const ortUnterkunft = entries.unterkuenfte[id].ort;
    const preisUnterkunft = entries.unterkuenfte[id].preis;
    const cleaningFee = 59;
    const serviceFee = 39;
    const deposit = preisUnterkunft * 2.5;
    const images = entries.unterkuenfte[id].bilder;
      const bewertung = entries.unterkuenfte[id].bewertung;
      const ausstattung = entries.unterkuenfte[id].ausstattung;
    
    
    
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        }
      ]);
      
      
      const calculateNights = () => {
        if (date[0].endDate !== null) {
        const startDate = date[0].startDate
        const endDate = date[0].endDate
        const timeDiff = Math.abs(endDate - startDate);
        const diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); 
        return diffDays
        } else {
            return 1}
    }

console.log(calculateNights())

const calculatePrice = () => {
    const nights = calculateNights();
    const price = preisUnterkunft;
    const total = nights * price;
    return total;
}

const totalPrice = calculatePrice() + cleaningFee + serviceFee + deposit;

console.log(entries)


  return (
    <div className='flex flex-col justify-center items-center mt-16'>
        <div className='w-4/6 flex justify-between'>
            <div className='text-3xl font-bold'>{nameUnterkunft}</div>
                <div className='flex space-x-4'>
                    <div className='text-sm flex items-center justify-end'><Unicons.UilShare size={16} className="mr-2"/> Teilen</div>
                    <div className='text-sm flex items-center justify-end'><Unicons.UilHeart size={16} className="mr-2"/> Speichern</div>
                </div>
        </div>

        <div className='h-auto my-10 flex justify-center items-center gap-4'>
        <div><img src={images[1]} className='bg-bootbnb-800 w-[497px] h-[497px] rounded-tl-xl rounded-bl-xl' /></div>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-4'>
                    <div><img src={images[0]} className='w-[240px] h-[240px] bg-bootbnb-400' /></div>
                    <div><img src="https://picsum.photos/310" className='w-[240px] h-[240px] bg-bootbnb-400 rounded-tr-xl' /></div>
                </div>
                <div className='flex gap-4'>
                    <div><img src="https://picsum.photos/305"  className='w-[240px] h-[240px] bg-bootbnb-400' /></div>
                    <div><img src="https://picsum.photos/333" className='w-[241px] h-[241px]  bg-bootbnb-400 rounded-br-xl' /></div>
                </div>
            </div>
        </div>

        <div className='w-4/6 flex justify-between'>
            <div className='flex flex-col w-[60%]'>

                <div className='text-2xl font-bold mb-6'>{nameUnterkunft} in {ortUnterkunft}</div>
                <div className='flex space-x-4 items-center'>
                   <div><Unicons.UilUserCircle size={48} /></div> 
                   <div className='flex flex-col'>
                    <span className='text-md font-semibold'>Gastgeber:in Max Mustermann </span>
                    <span>Seit 3 Jahren Gastgeber:in</span>
                   </div>
                   
                </div>
                <hr className='border-gray-300 border my-4'></hr>

                <div className='flex justify-center items-center text-4xl font-bold'><Unicons.UilStar size={40} className="mr-2 text-[#fcba03]" />{bewertung}</div>

                <hr className='border-gray-300 border my-4'></hr>

                <div className='flex flex-col space-y-4'>
                    <div className='flex items-center space-x-4'>
                        <Unicons.UilLocationPoint size={24} />
                        <div className='flex flex-col'>
                        <span className='font-semibold'>Tolle Lage</span>
                        <span>95 % der letzten Gäste haben die Lage mit 5 Sternen bewertet.</span>
                        </div>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <Unicons.UilKeyholeCircle size={24} />
                        <div className='flex flex-col'>
                        <span className='font-semibold'>Tolle Check-in-Erfahrung</span>
                        <span>95 % der letzten Gäste haben den Check-in-Vorgang mit 5 Sternen bewertet.</span>
                        </div>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <Unicons.UilCalender size={24} />
                        <div className='flex flex-col'>
                        <span className='font-semibold'>Kostenlose Stornierung innerhalb von 48 Stunden</span>
                        </div>
                    </div>
                </div>

                <hr className='border-gray-300 border my-4'></hr>

                <div className='flex flex-col space-y-4 py-4'>

                    <div className='text-justify'>
                        <p>The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.
                        The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.</p>
                    </div>
                    <div className='text-justify'>
                        <p>The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.
                        The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.</p>
                    </div>
                    <span className='font-semibold flex items-center underline'>Mehr lesen <Unicons.UilAngleRightB /></span>
                    

                </div>

                <hr className='border-gray-300 border my-4'></hr>

                <div className='flex flex-col space-y-4 py-4'>
                    <h3 className="text-xl font font-semibold">Ausstattung</h3>
                    <div><ul>
                        <li className='flex flex-row'><Unicons.UilCheck className="mr-2" />{ausstattung[0]}</li>
                        <li className='flex flex-row'><Unicons.UilCheck className="mr-2" />{ausstattung[1]}</li>
                        <li className='flex flex-row'><Unicons.UilCheck className="mr-2" />{ausstattung[2]}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-end w-[35%]'>
                <div className='p-4 w-10/12 rounded-lg border-gray-200 border-solid border shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] flex flex-col items-baseline gap-4' >
                    <div>
                        <span className='text-xl font-semibold mr-2'>{preisUnterkunft} €</span>Nacht
                    </div> 
                    <div className=''>
                        <DateRange
                        editableDateInputs={true}
                         onChange={item => setDate([item.selection])}
                         moveRangeOnFirstSelection={false}
                         ranges={date}
                        />
                    </div>
                    <div className='justify-center w-full'>
                        <button className='p-3 rounded-lg text-white font-semibold text-lg bg-bootbnb-500 w-full'>Reservieren</button>
                    </div>
                    
                    <div className='flex flex-col justify-center items-center text-sm'>
                        <p className='text-gray-500'>Du musst noch nichts bezahlen.</p>
                        <p className='text-gray-500 text-center' >Der Preis pro Nacht beinhaltet die MwSt. und sämtliche Gebühren.</p>
                    </div>

                    <div className='flex flex-col space-y-2 w-full'>
                        <div className='flex items-center justify-between text-gr'>
                            <div className='text-sm'>{preisUnterkunft}€ * {calculateNights()} Nächte</div>
                            <div className='text-sm'>{calculatePrice()} €</div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='text-sm'>Reinigungsgebühr</div>
                            <div className='text-sm'>{cleaningFee}€</div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='text-sm'>Servicegebühr</div>
                            <div className='text-sm'>{serviceFee}€</div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='text-sm'>Kaution</div>
                            <div className='text-sm'>{deposit}€</div>
                        </div>
                        <hr className='border-gray-400 py-2'></hr>
                        <div className='flex items-center justify-between font-semibold'>
                            <div className='text-md'>Gesamtpreis</div>
                            <div className='text-md'>{totalPrice}€</div>
                        </div>
                    </div>

                </div>
            </div>
                 
        </div>

    </div>
    
  )
}

export default Details