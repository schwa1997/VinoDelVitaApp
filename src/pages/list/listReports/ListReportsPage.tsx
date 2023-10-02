import ListReports from './subpage/listReportsAsUsers';

import ListReportsAsAgronomist from './subpage/listReportsAsAgronomist';

const ListReportByRoles = () => {
    const role = localStorage.getItem('role');
    return (
        <>
            <div className="tw-grid tw-place-content-center">
                {role === 'admin' || role === 'agronomists' ? (
                    <ListReportsAsAgronomist />
                ) : (
                    <ListReports />
                )}
            </div>
        </>
    );
};
export default ListReportByRoles;
