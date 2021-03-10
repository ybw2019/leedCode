import React, { Component } from 'react'
import './index.css'


export default class PageUp extends Component {

    change=(page)=>{
        this.props.changePages(page);
        console.log(page);
    }

    render() {
        const {currentPage} = this.props;
        const total = Math.ceil(this.props.total/10);
        var pages = [];
        for(var i=1; i<=total; i++){
            pages.push(i);
        }
        return (
            <div id='pageBox'>
                {
                    total>=9 && currentPage>4 && currentPage<total-3 ?
                    <div id='page'>
                        <button onClick={()=>this.change(currentPage-1)} id='normal'>
                            <svg viewBox="0 0 24 24" width="1em" height="1em">
                                <path fillRule="evenodd" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                            </svg>
                        </button>
                        <button onClick={()=>this.change(1)} id='normal'>{1}</button>
                        <button onClick={()=>this.change(currentPage-5)} id='hidden'>...</button>
                        <button onClick={()=>this.change(currentPage-2)} id='normal'>{currentPage-2}</button>
                        <button onClick={()=>this.change(currentPage-1)} id='normal'>{currentPage-1}</button>
                        <button onClick={()=>this.change(currentPage)} id='current'>{currentPage}</button>
                        <button onClick={()=>this.change(currentPage+1)} id='normal'>{currentPage+1}</button>
                        <button onClick={()=>this.change(currentPage+2)} id='normal'>{currentPage+2}</button>
                        <button onClick={()=>this.change(currentPage+5)} id='hidden'>...</button>
                        <button onClick={()=>this.change(Math.ceil(total/10))} id='normal'>{Math.ceil(total/10)}</button>
                        <button onClick={()=>this.change(currentPage+1)} id='normal'>
                            <svg viewBox="0 0 24 24" width="1em" height="1em">
                                <path fillRule="evenodd" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                            </svg>
                        </button>
                    </div> :
                    total>=9 && currentPage<=4 ?
                    <div id='page'>
                        <button onClick={()=>this.change(currentPage-1)} id='normal'>
                            <svg viewBox="0 0 24 24" width="1em" height="1em">
                                <path fillRule="evenodd" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                            </svg>
                        </button>
                        <button onClick={()=>this.change(1)} id={currentPage===1 ? 'current' : 'normal'}>1</button>
                        <button onClick={()=>this.change(2)} id={currentPage===2 ? 'current' : 'normal'}>2</button>
                        <button onClick={()=>this.change(3)} id={currentPage===3 ? 'current' : 'normal'}>3</button>
                        <button onClick={()=>this.change(4)} id={currentPage===4 ? 'current' : 'normal'}>4</button>
                        <button onClick={()=>this.change(5)} id={currentPage===5 ? 'current' : 'normal'}>5</button>
                        <button onClick={()=>this.change(6)} id={currentPage===6 ? 'current' : 'normal'}>6</button>
                        <button onClick={()=>this.change(currentPage+5)} id='hidden'>...</button>
                        <button onClick={()=>this.change(total)} id='normal'>{total}</button>
                        <button onClick={()=>this.change(currentPage+1)} id='normal'>
                            <svg viewBox="0 0 24 24" width="1em" height="1em">
                                <path fillRule="evenodd" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                            </svg>
                        </button>
                    </div> :
                    total>=9 && currentPage>=total-3 ?
                    <div id='page'>
                        <button onClick={()=>this.change(currentPage-1)} id='normal'>
                            <svg viewBox="0 0 24 24" width="1em" height="1em">
                                <path fillRule="evenodd" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                            </svg>
                        </button>
                        <button onClick={()=>this.change(1)} id='mormal'>{1}</button>
                        <button onClick={()=>this.change(currentPage-5)} id='hidden'>...</button>
                        <button onClick={()=>this.change(total-4)} id={currentPage===total-4 ? 'current' : 'normal'}>{total-4}</button>
                        <button onClick={()=>this.change(total-3)} id={currentPage===total-3 ? 'current' : 'normal'}>{total-3}</button>
                        <button onClick={()=>this.change(total-2)} id={currentPage===total-2 ? 'current' : 'normal'}>{total-2}</button>
                        <button onClick={()=>this.change(total-1)} id={currentPage===total-1 ? 'current' : 'normal'}>{total-1}</button>
                        <button onClick={()=>this.change(total)} id={currentPage===total ? 'current' : 'normal'}>{total}</button>
                        <button onClick={()=>this.change(currentPage+1)} id='mormal'>
                            <svg viewBox="0 0 24 24" width="1em" height="1em">
                                <path fillRule="evenodd" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                            </svg>
                        </button>
                    </div> :
                    total<9 && total!==1 ?
                    <div id='page'>
                        <button onClick={()=>this.change(currentPage-1)} id='normal'>
                            <svg viewBox="0 0 24 24" width="1em" height="1em">
                                <path fillRule="evenodd" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                            </svg>
                        </button>
                        {pages.map((page)=>{
                            return(
                                page===currentPage ?
                                <button key={page} onClick={()=>this.change(page)} id={currentPage===page ? 'current' : 'narmal'}>{page}</button> :
                                <button key={page} onClick={()=>this.change(page)} id={currentPage===page ? 'current' : 'narmal'}>{page}</button>
                            )
                        })}
                        <button onClick={()=>this.change(currentPage+1)} id='normal'>
                            <svg viewBox="0 0 24 24" width="1em" height="1em">
                                <path fillRule="evenodd" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                            </svg>
                        </button>
                    </div> :
                    <div id='page'>
                        <button id='current'>1</button>
                    </div>
                }
            </div>
        )
    }
}
