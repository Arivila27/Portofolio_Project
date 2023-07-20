<template>
	<div class="page-wrapper">
		<!-- Row -->
				<div class="row">
					<div class="col-sm-12">
						<div class="panel panel-default card-view">
							<div class="panel-heading">
								<div class="pull-left">
									<h6 class="panel-title txt-dark">data Table</h6>
								</div>
								<div class="clearfix"></div>
							</div>
							<div class="panel-wrapper collapse in">
								<div class="panel-body">
									<div class="table-wrap">
										<div class="table-responsive">
											<table id="datable_1" class="table table-hover display  pb-30" >
												<thead>
													<tr>
														<th>Name</th>
														<th>Position</th>
														<th>Office</th>
														<th>Age</th>
														<th>Start date</th>
														<th>Action</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>Garrett Winters</td>
														<td>Accountant</td>
														<td>Tokyo</td>
														<td>63</td>
														<td>2011/07/25</td>
														<td class="text-nowrap">
															<a href="#" class="mr-5" data-toggle="tooltip" data-original-title="view"> <i class="fa fa-eye text-inverse"></i> </a>
															<a href="#" class="mr-5" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse"></i> </a> 
															<a href="#" data-toggle="tooltip" data-original-title="delete"> <i class="fa fa-trash text-danger"></i> </a> 
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>	
					</div>
				</div>
				<!-- /Row -->
	</div>
</template>