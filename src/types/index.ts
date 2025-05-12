/**
 * Interface for province
*/
export interface Province {
	id: string;
	name: string;
	code: string;
}

/**
 * Interface for district
*/
export interface District {
	id: string;
	provinceId: string;
	name: string;
	code: string;
}