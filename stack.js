class Stack {

//Initialize

    constructor()
{
        this.items = [];
    }

//Push

    push(value)
{
        this.items.push(value);
    }

//Pop

    pop()
{
        return (this.items.length === 0)? "Underflow" : this.items.pop();
    }

//Peek

    peek()
{
        return this.items[this.items.length - 1];
    }

//Check if empty

    length()
{

        return this.items.length;

    }

//Traverse

    traverse()
{

        for(let i = 0, length = this.items.length; i < length; i++)
{
            console.log(this.items[i]);
        }

    }


//Search

    search(value)
{

        for(let i = 0, length = this.items.length; i < length; i++)
{

            if(this.items[i] === value) 
{
                return true;
            }
        }

        return false;

    }

}
