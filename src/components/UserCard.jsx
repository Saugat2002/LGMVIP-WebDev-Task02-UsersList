// import React from 'react'

const UserCard = ({ id, email, firstName, lastName, avatar }) => {
    return (
        <>
            <div className="flex space-x-12">
                <span className="w-1/12">{id}</span>
                <div>
                    <span className="font-semibold">
                        {firstName} {lastName}
                    </span>
                    <br />
                    {email}
                </div>
            </div>
            <div>
                <img src={avatar} alt="ALT_IMG" />
            </div>
        </>
    )
}

export default UserCard