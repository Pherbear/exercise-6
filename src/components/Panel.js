import React, {useState} from 'react'
import Display from './Display'
import Button from './Button'
import './calc.css'

export default function Panel() {

    const [currentDisplay, setCurrentDisplay] = useState('0')
    const [firstvalue, setFirstvalue] = useState(0)
    const [secondvalue, setSecondvalue] = useState(0)
    const [current, setCurrent] = useState('first')
    const [operation, setOperation] = useState('none')

    function clickHandle(handle){
        switch(handle){
            case 1:
                addDigit(1)
                break;
            case 2:
                addDigit(2)
                break;
            case 3:
                addDigit(3)
                break;
            case 4:
                addDigit(4)
                break;
            case 5:
                addDigit(5)
                break;
            case 6:
                addDigit(6)
                break;
            case 7:
                addDigit(7)
                break;
            case 8:
                addDigit(8)
                break;
            case 9:
                addDigit(9)
                break;
            case 0:
                addDigit(0)
                break;
            case 'C':
                clear()
                break;
            case 'c':
                clear()
                break;
            case '+':
                add()
                break;
            case '-':
                subtract()
                break;
            case '*':
                mulitply()
                break;
            case '/':
                divide()
                break;
            case '=':
                equal()
                break;
            default:
                break;
        }
    }

    function equal(){
        if (current == 'second'){
            switch(operation){
                case 'add':
                    add();
                    break;
                case 'subtract':
                    subtract()
                    break;
                case 'multiply':
                    mulitply()
                    break
                case 'divide':
                    divide()
                    break
                default:
            }
            setOperation('none')
        }
        setCurrent('first')
        display(firstvalue)
    }

    function divide(){
        if (current == 'first'){
        } else if (operation == 'divide') {
            setFirstvalue(firstvalue / secondvalue)
            setSecondvalue(0)
            display(firstvalue)
        } else {
            equal()
        }
        setCurrent('second')
        setOperation('divide')
    }

    function mulitply(){
        if (current == 'first'){
        } else if (operation == 'multiply') {
            setFirstvalue(firstvalue * secondvalue)
            setSecondvalue(0)
            display(firstvalue)
        } else {
            equal()
        }
        setCurrent('second')
        setOperation('multiply')
    }

    function subtract(){
        if (current == 'first'){
        } else if (operation == 'subtract') {
            setFirstvalue(firstvalue - secondvalue)
            setSecondvalue(0)
            display(firstvalue)
        } else {
            equal()
        }
        setCurrent('second')
        setOperation('subtract')
    }

    function add(){    
        if (current == 'first'){
        } else if (operation == 'add') {
            setFirstvalue(firstvalue + secondvalue)
            setSecondvalue(0)
            display(firstvalue)
        } else {
            equal()
        }
        setCurrent('second')
        setOperation('add')
    }

    function clear(){
        setFirstvalue(0)
        setSecondvalue(0)
        setCurrent('first')
        display(firstvalue)
    }

    function addDigit(value){
        if(current == 'first'){
            setFirstvalue((firstvalue * 10) + value);
            display(firstvalue)
        } else {
            setSecondvalue((secondvalue * 10) + value)
            display(secondvalue)
        }
    }

    function display(value){
        if (value === Infinity){
            setCurrentDisplay("ERROR")
        } else if (value.toString().length > 13){
            setCurrentDisplay(value.toExponential(7))
        } else {
            setCurrentDisplay(value)
        }
    }

  return (
    <div Class="container">
        <Display display={currentDisplay}/>
        <div Class="buttons">
            <Button button={1} onClick={(val) => clickHandle(val)}/>
            <Button button={2} onClick={(val) => clickHandle(val)}/>
            <Button button={3} onClick={(val) => clickHandle(val)}/>
            <Button button={4} onClick={(val) => clickHandle(val)}/>
            <Button button={5} onClick={(val) => clickHandle(val)}/>
            <Button button={6} onClick={(val) => clickHandle(val)}/>
            <Button button={7} onClick={(val) => clickHandle(val)}/>
            <Button button={8} onClick={(val) => clickHandle(val)}/>
            <Button button={9} onClick={(val) => clickHandle(val)}/>
            <Button button={0} onClick={(val) => clickHandle(val)}/>
            <Button button={'-'} onClick={(val) => clickHandle(val)}/>
            <Button button={'+'} onClick={(val) => clickHandle(val)}/>
            <Button button={'/'} onClick={(val) => clickHandle(val)}/>
            <Button button={'*'} onClick={(val) => clickHandle(val)}/>
            <Button button={'='} onClick={(val) => clickHandle(val)}/>
            <Button button={'C'} onClick={(val) => clickHandle(val)}/>
        </div>
    </div>
  )
}
