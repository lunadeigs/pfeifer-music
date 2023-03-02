/* External dependencies */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

/* Internal dependencies */
import Note from '../../Image_Assets/Pfeifer_Note_Black.png'

/** Side navigation bar for the listen page */
const ListenSidebar = (props) => {
    const location = useLocation();

    const ITEM_MARGIN_STYLE = {
        marginBottom: "-2.75%"
    }

    function closeAudio(){
        if(props.audioOpen){
            props.setAudioOpen(value => !value);
        }
    }

    return(
        <div className='page-sidebar content-sidebar unselectable'>
            <Link 
                to='/listen/montage' 
                style={{ textDecoration: 'none' }} 
                onClick={ closeAudio }
                className={ (location.pathname === '/listen/montage' ?
                    "selected-sidebar-content-link" : "unselected-sidebar-content-link")
                }
            >
                <img 
                    src={ Note } 
                    style={{
                        marginTop: "-3%",
                        marginBottom: "0"
                    }}
                    className={ location.pathname === '/listen/montage' ? 
                        "content-sidebar-note-selected" : "content-sidebar-note" 
                    } 
                    alt='Music Note'
                />
                <p 
                    style={{
                        marginTop: "-3%",
                        marginBottom: "0"
                    }}
                    className={ location.pathname === '/listen/montage' ? 
                    "content-sidebar-text-selected" : "content-sidebar-text" 
                    }
                >
                    audio montage
                    <br />
                    <span className='content-sidebar-subtitle'>(3.5 minute presentation)</span>
                </p>
            </Link>
            
            <hr 
                className='content-sidebar-hr'
                style={{
                    marginBottom: "5%"
                }}
            />

            <Link 
                to='/listen/grooves' 
                style={{ textDecoration: 'none' }} 
                onClick={ closeAudio }
                className={ "listen-grooves " + (location.pathname === '/listen/grooves' ?
                    "selected-sidebar-content-link" : "unselected-sidebar-content-link")
                }
            >
                <img 
                    src={ Note } 
                    className={ location.pathname === '/listen/grooves' ? 
                        "content-sidebar-note-selected" : "content-sidebar-note" 
                    } 
                    alt='Note'
                    style={ ITEM_MARGIN_STYLE }
                />

                <p 
                    className={ location.pathname === '/listen/grooves' ? 
                    "content-sidebar-text-selected" : "content-sidebar-text" 
                    }
                    style={ ITEM_MARGIN_STYLE }
                >
                    grooves
                </p>
            </Link>

            <Link 
                to='/listen/jazz' 
                style={{ textDecoration: 'none' }} 
                onClick={ closeAudio }
                className={ "listen-jazz " + (location.pathname === '/listen/jazz' ?
                    "selected-sidebar-content-link" : "unselected-sidebar-content-link")
                }
            >
                <img 
                    src={ Note } 
                    className={ location.pathname === '/listen/jazz' ? 
                        "content-sidebar-note-selected" : "content-sidebar-note" 
                    }
                    style={ ITEM_MARGIN_STYLE }
                    alt='Note'
                />

                <p 
                    className={ location.pathname === '/listen/jazz' ? 
                    "content-sidebar-text-selected" : "content-sidebar-text" 
                    }
                    style={ ITEM_MARGIN_STYLE }
                >
                    jazz/blues
                </p>
            </Link>

            <Link 
                to='/listen/orchestral' 
                style={{ textDecoration: 'none' }} 
                onClick={ closeAudio }
                className={ "listen-orchestral " + (location.pathname === '/listen/orchestral' ?
                    "selected-sidebar-content-link" : "unselected-sidebar-content-link")
                }
            >
                <img 
                    src={ Note } 
                    className={ location.pathname === '/listen/orchestral' ? 
                        "content-sidebar-note-selected" : "content-sidebar-note" 
                    }
                    style={ ITEM_MARGIN_STYLE }
                    alt='Note'
                />

                <p 
                    className={ location.pathname === '/listen/orchestral' ? 
                    "content-sidebar-text-selected" : "content-sidebar-text" 
                    }
                    style={ ITEM_MARGIN_STYLE }
                >
                    orchestral
                </p>
            </Link>

            <Link 
                to='/listen/ethereal' 
                style={{ textDecoration: 'none' }} 
                onClick={ closeAudio }
                className={ "listen-ethereal " + (location.pathname === '/listen/ethereal' ?
                    "selected-sidebar-content-link" : "unselected-sidebar-content-link")
                }
            >
                <img 
                    src={ Note } 
                    className={ location.pathname === '/listen/ethereal' ? 
                        "content-sidebar-note-selected" : "content-sidebar-note" 
                    }
                    style={ ITEM_MARGIN_STYLE }
                    alt='Note'
                />

                <p 
                    className={ location.pathname === '/listen/ethereal' ? 
                    "content-sidebar-text-selected" : "content-sidebar-text" 
                    }
                    style={ ITEM_MARGIN_STYLE }
                >
                    ethereal/emotional
                </p>
            </Link>

            <Link 
                to='/listen/alternative' 
                style={{ textDecoration: 'none' }} 
                onClick={ closeAudio }
                className={ "listen-alternative " + (location.pathname === '/listen/alternative' ?
                    "selected-sidebar-content-link" : "unselected-sidebar-content-link")
                }
            >
                <img 
                    src={ Note } 
                    className={ location.pathname === '/listen/alternative' ? 
                        "content-sidebar-note-selected" : "content-sidebar-note" 
                    }
                    style={ ITEM_MARGIN_STYLE }
                    alt='Note'
                />

                <p 
                    className={ location.pathname === '/listen/alternative' ? 
                    "content-sidebar-text-selected" : "content-sidebar-text" 
                    }
                    style={ ITEM_MARGIN_STYLE }
                >
                    alternative/classic rock
                </p>
            </Link>

            <Link 
                to='/listen/vocals' 
                style={{ textDecoration: 'none' }} 
                onClick={ closeAudio }
                className={ "listen-vocals " + (location.pathname === '/listen/vocals' ?
                    "selected-sidebar-content-link" : "unselected-sidebar-content-link")
                }
            >
                <img 
                    src={ Note } 
                    className={ location.pathname === '/listen/vocals' ? 
                        "content-sidebar-note-selected" : "content-sidebar-note" 
                    }
                    style={ ITEM_MARGIN_STYLE }
                    alt='Note'
                />

                <p 
                    className={ location.pathname === '/listen/vocals' ? 
                    "content-sidebar-text-selected" : "content-sidebar-text" 
                    }
                    style={ ITEM_MARGIN_STYLE }
                >
                    vocals
                </p>
            </Link>

            <Link 
                to='/listen/good' 
                style={{ textDecoration: 'none' }} 
                onClick={ closeAudio }
                className={ "listen-good " + (location.pathname === '/listen/good' ?
                    "selected-sidebar-content-link" : "unselected-sidebar-content-link")
                }
            >
                <img 
                    src={ Note } 
                    className={ location.pathname === '/listen/good' ? 
                        "content-sidebar-note-selected" : "content-sidebar-note" 
                    }
                    style={ ITEM_MARGIN_STYLE }
                    alt='Note'
                />

                <p 
                    className={ location.pathname === '/listen/good' ? 
                    "content-sidebar-text-selected" : "content-sidebar-text" 
                    }
                    style={ ITEM_MARGIN_STYLE }
                >
                    good times/americana
                </p>
            </Link>

            <Link 
                to='/listen/quirky' 
                style={{ textDecoration: 'none' }} 
                onClick={ closeAudio }
                className={ "listen-quirky " + (location.pathname === '/listen/quirky' ?
                    "selected-sidebar-content-link" : "unselected-sidebar-content-link")
                }
            >
                <img 
                    src={ Note } 
                    className={ location.pathname === '/listen/quirky' ? 
                        "content-sidebar-note-selected" : "content-sidebar-note" 
                    }
                    style={ ITEM_MARGIN_STYLE }
                    alt='Note'
                />

                <p 
                    className={ location.pathname === '/listen/quirky' ? 
                    "content-sidebar-text-selected" : "content-sidebar-text" 
                    }
                    style={ ITEM_MARGIN_STYLE }
                >
                    quirky
                </p>
            </Link>

            <Link 
                to='/listen/world' 
                style={{ textDecoration: 'none' }} 
                onClick={ closeAudio }
                className={ "listen-world " + (location.pathname === '/listen/world' ?
                    "selected-sidebar-content-link" : "unselected-sidebar-content-link")
                }
            >
                <img 
                    src={ Note } 
                    className={ location.pathname === '/listen/world' ? 
                        "content-sidebar-note-selected" : "content-sidebar-note" 
                    }
                    style={ ITEM_MARGIN_STYLE }
                    alt='Note'
                />

                <p 
                    className={ location.pathname === '/listen/world' ? 
                    "content-sidebar-text-selected" : "content-sidebar-text" 
                    }
                    style={ ITEM_MARGIN_STYLE }
                >
                    world
                </p>
            </Link>

            <Link 
                to='/listen/childrens' 
                style={{ textDecoration: 'none' }} 
                onClick={ closeAudio }
                className={ "listen-childrens " + (location.pathname === '/listen/childrens' ?
                    "selected-sidebar-content-link" : "unselected-sidebar-content-link")
                }
            >
                <img 
                    src={ Note } 
                    className={ location.pathname === '/listen/childrens' ? 
                        "content-sidebar-note-selected" : "content-sidebar-note" 
                    }
                    style={ ITEM_MARGIN_STYLE }
                    alt='Note'
                />

                <p 
                    className={ location.pathname === '/listen/childrens' ? 
                    "content-sidebar-text-selected" : "content-sidebar-text" 
                    }
                    style={ ITEM_MARGIN_STYLE }
                >
                    chipmunks montage
                </p>
            </Link>
        </div>
    )
}

export default ListenSidebar;