'use client';

// export function LoginForm() {
//     const { push } = useRouter();
//     const { mutate, isPending } = useMutation<unknown, Error, Login, unknown>({
//         mutationKey: ['login'],
//         mutationFn: json =>
//             client.api.auth.login.$post({
//                 json,
//             }),
//         onSuccess: async () => {
//             push(Routes.home());
//         },
//         onError: () => {
//             toast.error('Login failed.');
//         },
//     });

//     const form = useForm<Login>({
//         resolver: zodResolver(loginSchema),
//         defaultValues: {
//             email: '',
//             password: '',
//         },
//         criteriaMode: 'all',
//     });

//     return (
//         <Form {...form}>
//             <form onSubmit={form.handleSubmit(values => mutate(values))} className='space-y-4'>
//                 <FormField
//                     control={form.control}
//                     name='email'
//                     render={({ field }) => (
//                         <FormItem>
//                             <FormLabel>Email</FormLabel>
//                             <FormControl>
//                                 <Input
//                                     autoComplete='email'
//                                     placeholder='hey@example.com'
//                                     {...field}
//                                 />
//                             </FormControl>
//                             <FormMessage />
//                         </FormItem>
//                     )}
//                 />
//                 <FormField
//                     control={form.control}
//                     name='password'
//                     render={({ field }) => (
//                         <FormItem>
//                             <div className='space-y-2 leading-none'>
//                                 <div className='space-y-1'>
//                                     <FormLabel>Password</FormLabel>
//                                 </div>
//                                 <FormControl>
//                                     <PasswordInput
//                                         placeholder='Your password'
//                                         autoComplete='current-password'
//                                         {...field}
//                                     />
//                                 </FormControl>
//                                 <ErrorMessage
//                                     errors={form.formState.errors}
//                                     name={field.name}
//                                     render={({ messages }) =>
//                                         messages &&
//                                         Object.entries(messages).map(([type, message]) => (
//                                             <p
//                                                 className='text-sm font-medium text-destructive'
//                                                 key={type}>
//                                                 {message}
//                                             </p>
//                                         ))
//                                     }
//                                 />
//                             </div>
//                         </FormItem>
//                     )}
//                 />
//                 <Button type='submit' disabled={isPending}>
//                     <Loader2
//                         className={cn('mr-2 size-4 animate-spin', {
//                             [`inline`]: isPending,
//                             [`hidden`]: !isPending,
//                         })}
//                     />
//                     Login
//                 </Button>
//             </form>
//         </Form>
//     );
// }

export function LoginForm() {
    return <div>test</div>;
}
