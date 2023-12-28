import * as React from "react"
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@lshay/ui/components/default/pagination"

function PaginationDemo(): React.ReactNode {
	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious size="m" href="#" />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink size="m" href="#">
						1
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationEllipsis />
				</PaginationItem>
				<PaginationItem>
					<PaginationNext size="m" href="#" />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	)
}

export default PaginationDemo
