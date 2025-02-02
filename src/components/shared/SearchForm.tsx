'use client'

import { XCircleIcon } from '@primer/styled-octicons'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import { type FieldErrors, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { GIT_URL } from '@/constants/git.constants'
import type { IUserNameProps } from '@/shared/interfaces/username.interface'
import { pagesUrl } from '@/config/pages-url.config'
import { useLazyFetchUserQuery } from '@/store/api/user.api'
import { removeProtocol } from '@/utils/remove-protocol'

interface SearchFormProps extends Partial<IUserNameProps> {
    orientation?: 'horizontal' | 'vertical'
}

const gitUrl = `${removeProtocol(GIT_URL)}/`

export function SearchForm({
    orientation = 'vertical',
    username
}: SearchFormProps) {
    const router = useRouter()

    const [trigger, { isLoading, isError }] = useLazyFetchUserQuery()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IUserNameProps>({ defaultValues: { username } })

    const handleError = useCallback(
        (value: string) =>
            toast.error(value, {
                className: 'alert-error',
                icon: <XCircleIcon />
            }),
        []
    )

    const onSubmitForm = ({ username }: IUserNameProps) => {
        trigger(username).then(({ isSuccess, isError }) => {
            if (isSuccess) {
                router.push(pagesUrl.userId(username))
            } else if (isError) {
                handleError('User notfound')
            }
        })
    }

    const onErrorForm = (errors: FieldErrors<IUserNameProps>) =>
        errors.username && handleError('Enter username')

    return (
        <form
            className={'space-y-4'}
            onSubmit={handleSubmit(onSubmitForm, onErrorForm)}
        >
            {orientation === 'vertical' ? (
                <>
                    <label className={'form-control w-full'}>
                        <div className={'label'}>
                            <span className={'label-text'}>{gitUrl}</span>
                        </div>
                        <input
                            placeholder={'username'}
                            className={clsx(
                                'input input-bordered w-full',
                                (errors.username || isError) && 'input-error'
                            )}
                            {...register('username', {
                                required: true
                            })}
                        />
                    </label>
                    <button
                        type={'submit'}
                        className={'btn btn-primary w-full'}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <span className={'loading loading-spinner'} />
                        ) : (
                            'Search'
                        )}
                    </button>
                </>
            ) : (
                <div className={'flex items-center justify-center gap-x-2'}>
                    <label className={'text-sm'}>{gitUrl}</label>
                    <input
                        placeholder={'username'}
                        className={clsx(
                            'input input-bordered input-sm w-full',
                            (errors.username || isError) && 'input-error'
                        )}
                        {...register('username', {
                            required: true
                        })}
                    />
                    <button
                        type={'submit'}
                        className='flex-none btn btn-sm btn-primary'
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <span className={'loading loading-spinner'} />
                        ) : (
                            'Search'
                        )}
                    </button>
                </div>
            )}
        </form>
    )
}
